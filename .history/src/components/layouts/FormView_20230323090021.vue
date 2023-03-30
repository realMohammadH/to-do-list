<script setup></script>

<template>
  <form action="">
    <div class="form-group">
      <input type="email" id="email" name="email" required />
      <label for="email">Email</label>
    </div>

    <div class="form-group">
      <input type="password" id="password" name="password" required />
      <label for="password">Password</label>
    </div>

    <div class="form-group">
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        required
      />
      <label for="confirm-password">Confirm Password</label>
    </div>
    
    <button type="submit">Register</button>
  </form>
</template>

<style scoped>
form {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  position: relative;
  margin-bottom: 20px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 17px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 18px;
}

input[type="email"] + label,
input[type="password"] + label {
  position: absolute;
  top: 12px;
  left: 20px;
  color: #aaa;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
}

input[type="email"]:focus + label,
input[type="password"]:focus + label {
  top: 5px;
  left: 10px;
  font-size: 12px;
  color: #db4c3f;
}
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #db4c3f;
  outline: none;
}
button[type="submit"] {
  width: 100%;
  background-color: #db4c3f;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
}

button[type="submit"]:hover {
  background-color: #cf3f31;
}
</style>
