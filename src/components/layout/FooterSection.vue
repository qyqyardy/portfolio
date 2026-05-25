<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="logo-bracket">&lt;</span>LRA<span class="logo-bracket"> /&gt;</span>
        </div>
        <p class="footer-text">
          {{ $t('footer.builtBy') }} &copy; {{ currentYear }}
        </p>
        <div class="footer-socials">
          <a href="mailto:comvertzone@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/lrassidiq" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/qyqyardy" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 40px 0;
  border-top: 1px solid var(--glass-border);
  background: var(--bg-primary);
}

.footer-content {
  text-align: center;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.logo-bracket {
  color: var(--accent);
}

.footer-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.footer-socials a {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--bento-card-bg);
  border: 1px solid var(--bento-card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: var(--transition);
  text-decoration: none;
}

.footer-socials a:hover {
  background: rgba(var(--accent-rgb), 0.1);
  border-color: rgba(var(--accent-rgb), 0.2);
  color: var(--accent);
  transform: translateY(-3px);
}
</style>
