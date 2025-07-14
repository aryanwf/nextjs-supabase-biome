# Next.js + Supabase Template

A clean starter template for Next.js 15 with Supabase integration, Turbopack for fast development and Biome.js for formatting and linting.

## Features

- **Next.js 15** with App Router and Turbopack
- **Supabase** integration with SSR support (optional)
- **SWR** for data fetching with custom Supabase hooks
- **Tailwind CSS** for styling
- **Shadcn/ui** components with Sonner for notifications
- **Biome.js** for fast formatting and linting

## Getting Started

### Installation

```bash
npx degit aryanwf/nextjs-supabase-biome <APP_NAME>
cd <APP_NAME>
```

 Install dependencies (using bun)
```bash
bun install
```
 Start development server
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

### Environment Variables (Optional)

The template works without any configuration. To enable Supabase features, create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_project_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
```

### Scripts

```bash
# start development server with turbopack
bun dev

# format code
bun run format

# lint code
bun run lint

# check both formatting and linting
bun run check
```

## SWR + Supabase Integration

This template includes a simple SWR setup for Supabase data fetching using a custom fetcher and key-based filtering system.

### How It Works

The integration uses a custom `supabaseFetcher` that converts SWR keys into Supabase queries:

```typescript
// Key format: 'table:select_query,filter_1,filter_2,...'
const { data, error, isLoading } = useSWR(
  'posts:*,limit.3,order.created_at.desc',
  supabaseFetcher
)
```

### Basic Usage

```typescript
import useSWR from 'swr'
import { supabaseFetcher } from '@/lib/swr'

function MyComponent() {
  // fetch all posts
  const { data, error, isLoading } = useSWR('posts:*', supabaseFetcher)
  
  // fetch specific columns
  const { data } = useSWR('posts:id,title,created_at', supabaseFetcher)
  
  // fetch with filters
  const { data } = useSWR('posts:*,limit.10,order.created_at.desc', supabaseFetcher)
}
```

### Supported Filters

Available filters: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `like`, `ilike`, `in`, `limit`, `offset`, `order`

```typescript
// examples:
'posts:*,eq.user_id.123'                    // WHERE user_id = 123
'posts:*,limit.10,order.created_at.desc'    // ORDER BY created_at DESC LIMIT 10
'profiles:*,eq.id.${userId}'                // WHERE id = userId
```

## Customization

1. **Styling**: Modify `app/globals.css` and use Tailwind classes
2. **Components**: Add new components in the `components/` directory
3. **Database**: Configure your Supabase schema in the `supabase/` directory
4. **Linting**: Adjust rules in `biome.jsonc`
## Deployment

This template is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

## License

MIT License - feel free to use this template for your projects.
