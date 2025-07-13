import { createClient } from '@/utils/supabase/client';

// custom fetcher for supabase queries
// key format: 'table:select_query,filter_1,filter_2,...'
// - table: the name of the table to query
// - select_query: the columns to select, e.g., '*' or 'id,name'
// - filters: comma-separated list of filters, e.g., 'limit.10,order.created_at.desc'
// filter format: 'operator.column.value' or 'modifier.value'
// e.g., 'eq.id.123', 'limit.10', 'order.name.asc'
export const supabaseFetcher = async (key: string) => {
  const supabase = createClient();

  const [table, queryString] = key.split(':');

  if (!table) {
    throw new Error('invalid swr key format');
  }

  // if there's no query string, just select all
  if (!queryString) {
    const { data, error } = await supabase.from(table).select('*');
    if (error) throw error;
    return data;
  }

  const [selectQuery, ...filters] = queryString.split(',');
  let query = supabase.from(table).select(selectQuery || '*');

  // apply filters
  filters.forEach((filter) => {
    const [modifier, ...args] = filter.split('.');
    if (!modifier) return;

    switch (modifier) {
      case 'order': {
        const [column, direction] = args;
        if (column) {
          query = query.order(column, { ascending: direction !== 'desc' });
        }
        break;
      }
      case 'limit': {
        const [limit] = args;
        if (limit) {
          query = query.limit(Number(limit));
        }
        break;
      }
      case 'offset': {
        const [offset] = args;
        if (offset) {
          query = query.range(Number(offset), Number(offset) + 999);
        }
        break;
      }
      case 'eq': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.eq(column, value);
        }
        break;
      }
      case 'neq': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.neq(column, value);
        }
        break;
      }
      case 'gt': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.gt(column, value);
        }
        break;
      }
      case 'gte': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.gte(column, value);
        }
        break;
      }
      case 'lt': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.lt(column, value);
        }
        break;
      }
      case 'lte': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.lte(column, value);
        }
        break;
      }
      case 'like': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.like(column, value);
        }
        break;
      }
      case 'ilike': {
        const [column, value] = args;
        if (column && value !== undefined) {
          query = query.ilike(column, value);
        }
        break;
      }
      case 'in': {
        const [column, ...values] = args;
        if (column && values.length > 0) {
          query = query.in(column, values);
        }
        break;
      }
      default:
        console.warn(`unsupported supabase filter: ${modifier}`);
        break;
    }
  });

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data;
};

// default fetcher for regular api calls
export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('failed to fetch');
  }

  return response.json();
};

// swr configuration
export const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  refreshInterval: 0,
  dedupingInterval: 2000,
};
