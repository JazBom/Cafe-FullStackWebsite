import React from "react";
import NavAdmin from "./NavAdmin";


function NewUserForm () {

    $(document).on("submit", {newUser}, async (event) => {
        event.preventDefault();
    
        // Extract user name and password from the form
        const formData = {
          username: $("input[name='username']").val(),
          password: $("input[name='password']").val(),
        };
    
        try {
          // Make a POST request to the server to create a new user
          const response = await $.ajax({
            type: "POST",
            url: "/api/users/register",
            contentType: "application/json",
            data: JSON.stringify(formData),
          });
    
          // Clear form by calling empty function
          $("body").empty();
    
          // Append the login form so user can now login
          $("body").append(loginUser());
        } catch (err) {
          // Inform user that their login could not be created if there's an error
          $("body").append("<div>Could not create user</div>");
        }
      });

    return (
        <div>
            <NavAdmin/>
            
            <form className="new-user">
            <h1>Register</h1>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" placeholder="Please enter a username" name="username"/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Please enter a password" name="password"/>
            </div>
            <Button type="submit" variant="info" className="btn btn-primary">Submit</Button>
            </form>

            <div className="existing-user-button-div">
                <Button variant="info" className="button newUser" href='/LogInForm'>Existing user log-in</Button>
            </div>
        </div>
    )
}

export { NewUserForm };