<template>
  <div>
    <nav class="panel">
      <p class="panel-heading">
        suggestions
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-small" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">all</a>
        <a>approved</a>
        <a>rejected</a>
      </p>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        marksheet
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        minireset.css
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        jgthms.github.io
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        daniellowtw/infboard
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        mojs
      </a>
      <label class="panel-block">
        <input type="checkbox">
        remember me
      </label>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          reset all filters
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SearchPanel',
  data() {
    return {};
  }
}
</script>

<style lang="scss" scoped>
$panel-heading-color: #fff;
$panel-heading-background-color: #2e3131;

@import '~bulma/bulma.sass';
</style>
