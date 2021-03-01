import React from "react";
import NavAdmin from "./NavAdmin";

function LogInForm () {
// HAVE TO REDO ALL THIS STUFF
    $(document).on("submit", {logIn}, async (event) => {
          event.preventDefault();
          // Extract username and password entered
          const formData = {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
          };
          // Make a call to validate user name and password
          try {
            const response = await $.ajax({
              type: "POST",
              url: "/api/users/login",
              contentType: "application/json",
              data: JSON.stringify(formData),
            });
      
            // Clear current login form as login is successful by calling empty() function
            $("body").empty();
      
            // Append the image object form to the body allowing the user to create/update/delete images
            $("body").append(imageForm());
          } catch (err) {
            // If there's a problem logging in, then add a message to let user know that an invalid combination was provided
            $("body").append("<div>Invalid user/pass provided!</div>");
          }
        });

    return (
        <div>
            <NavAdmin/>
            <form className="login-user">
            <h1>Login</h1>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" placeholder="Please enter your username" name="username"/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Please enter your password" name="password"/>
            </div>
            <Button type="submit" variant="info" className="btn btn-primary">Submit</Button>
            </form>

            <div className="new-user-button-div">
                <Button variant="info" className="button logIn" href='/NewUserForm'>Register new user</Button>
            </div>
        </div>
    )
}

export { LogInForm };