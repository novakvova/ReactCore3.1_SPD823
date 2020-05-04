import React from 'react';

const Login = props => (
    <div>
        <div className="row">
            <div className="col-md-4">
                <h1>Log in:</h1>
                <form asp-action="Login">
                    <div asp-validation-summary="ModelOnly" className="text-danger"></div>
                    <div className="form-group">
                        <label asp-for="Email" className="control-label"></label>
                        <input asp-for="Email" className="form-control" />
                        <span asp-validation-for="Email" className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <label asp-for="Password" className="control-label"></label>
                        <input asp-for="Password" className="form-control" />
                        <span asp-validation-for="Password" className="text-danger"></span>
                    </div>
                    <div>
                        <input type="checkbox" asp-for="RememberMe" />
                        <label asp-for="RememberMe"></label><br />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Вхід" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default Login;