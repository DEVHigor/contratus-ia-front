<script>
  import '../app.css';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  // Store global para controlar a visibilidade do status da API
  export const showApiStatus = writable(false);
  
  // Definir tema escuro fixo
  onMount(() => {
    document.documentElement.setAttribute('data-theme', 'clackdark');
  });
  
  function toggleApiStatus() {
    showApiStatus.update(value => {
      const newValue = !value;
      console.log('Toggle API Status:', newValue);
      return newValue;
    });
  }
</script>

<div class="min-h-screen flex flex-col bg-base-100 animate-fade-in">
  <header class="sticky top-0 z-50">
    <div class="navbar bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden hover:bg-primary/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-52 text-base-content">
            <li><a href="/" class="font-medium hover:text-primary transition-colors duration-300">Início</a></li>
            <li><a href="/contratos" class="font-medium hover:text-primary transition-colors duration-300">Contratos</a></li>
            <li><a href="/sobre" class="font-medium hover:text-primary transition-colors duration-300">Sobre</a></li>
          </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case hover:bg-primary/20 transition-all duration-300 px-2">
          <img src="/logo-clack-white.svg" alt="Clack AI" class="h-10" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/" class="font-medium hover:bg-primary/20 transition-colors duration-300">Início</a></li>
          <li><a href="/contratos" class="font-medium hover:bg-primary/20 transition-colors duration-300">Contratos</a></li>
          <li><a href="/sobre" class="font-medium hover:bg-primary/20 transition-colors duration-300">Sobre</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <span class="text-sm text-white/80">AI 4 BUSINESS</span>
      </div>
    </div>
  </header>

  <main class="flex-grow container mx-auto px-4 py-8" transition:fade={{ duration: 300 }}>
    <slot />
  </main>

  <footer class="p-6 bg-gradient-to-r from-base-200 to-base-300 text-base-content">
    <div class="footer-content container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="flex items-center gap-2">
        <img src="/logo-clack.svg" alt="Clack AI" class="h-8" />
        <p>Copyright © 2025 - Todos os direitos reservados</p>
      </div>
      
      <div class="flex space-x-4">
        <a href="/" class="link link-hover hover:text-primary transition-colors duration-300">Política de Privacidade</a>
        <a href="/" class="link link-hover hover:text-primary transition-colors duration-300">Termos de Uso</a>
        
        <!-- Botão discreto para mostrar/ocultar status da API -->
        <button 
          class="btn btn-sm btn-ghost hover:bg-base-300 transition-all duration-300" 
          on:click={toggleApiStatus} 
          title="Mostrar/ocultar status da API"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span class="text-xs ml-1">API</span>
        </button>
      </div>
    </div>
  </footer>
</div>
