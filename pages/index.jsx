import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component';

export default function Home() {
  return (
    <Layout>

    <aside
    class="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25">
        <div class="max-w-lg text-center sm:text-left">
          <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
          </h2>
    
          <p
            class="hidden max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum beatae
            excepturi dolores.
          </p>
    
          <div class="mt-4 sm:mt-8">
            <a
              class="inline-flex items-center px-8 py-3 text-white bg-gray-900 rounded-full shadow-lg transition focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
              href="#"
            >
              <span class="text-sm font-medium"> Order Now </span>
    
              <svg
                class="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  

    </Layout>
  );
}
