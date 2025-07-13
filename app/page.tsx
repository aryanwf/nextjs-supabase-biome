import { SWRExample } from '@/components/examples/swr-example';

// lucide-react icons usage examples
// import { Heart, Star, User, Settings, Home, Mail, Phone, Search, Menu, X } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to your Next.js Template
          {/* <Home className="inline-block ml-2 w-8 h-8" /> */}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get started by editing{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">app/page.tsx</code>
        </p>
        <div className="space-y-2 text-sm text-gray-500 mb-8">
          <p>Next.js 15 with App Router & Turbopack</p>
          <p>Supabase integration</p>
          <p>SWR for data fetching</p>
          <p>Tailwind CSS</p>
          <p>Shadcn/ui components</p>
          <p>Biome.js formatting & linting</p>
          <p>Lucide React icons</p>
        </div>

        {/* lucide-react icons examples */}
        {/* 
        <div className="flex justify-center gap-4 mb-8">
          <Heart className="w-6 h-6 text-red-500" />
          <Star className="w-6 h-6 text-yellow-500" />
          <User className="w-6 h-6 text-blue-500" />
          <Settings className="w-6 h-6 text-gray-500" />
          <Mail className="w-6 h-6 text-green-500" />
          <Phone className="w-6 h-6 text-purple-500" />
        </div>
        */}

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Ready to use!</strong> This template works without any
              configuration. Add your{' '}
              <code className="bg-blue-100 px-1 rounded">.env.local</code> file
              to enable Supabase features.
            </p>
          </div>

          <SWRExample />
        </div>
      </div>
    </main>
  );
}
