<template>
  <div class="pl-4 pr-4">
    <div class="grid grid-cols-1 md:grid-cols-2 md:justify-between md:gap-20 rounded bg-light-foreground dark:bg-dark-foreground">
      <div class="grid grid-cols-1 p-3 h-fit text-center md:text-left">
        <h1 class="text-xl font-extrabold leading-none tracking-tight text-secondary-content dark:text-primary-content">
          Welcome back, @NAME!
        </h1>
        <p class="font-normal text-secondary-content dark:text-primary-content">
          Ready to manage your network?
          <br>
          Let's make it work.
        </p>
      </div>
      <SvgsServerStatus class="w-11/12 md:w-52 h-fit m-auto md:mr-2 mb-2 p-2" />
    </div>
  </div>
</template>
