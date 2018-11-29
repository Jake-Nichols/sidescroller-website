<template>
  <div class="game">
    <h1>Play the game below</h1>
    <iframe src="https://google.co.uk"></iframe>
    <h2>Bug/Feedback Form</h2>
    <form name="bug/feedback" action="/game" netlify>
        <p>
            <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
            <label>Email <input type="email" name="email" /></label>
        </p>
        <div data-netlify-recaptcha></div>
        <button type="submit">Send</button>
    </form>
  </div>
</template>
