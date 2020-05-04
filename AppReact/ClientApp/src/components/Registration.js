import React from 'react';

const Registration = props => (
    <div>
        <div className="row">
            <div className="col-md-4">
                <h1>Registration:</h1>
                <form asp-action="Register">
                    <div asp-validation-summary="ModelOnly" className="text-danger"></div>
                    <div className="form-group">
                        <label asp-for="Phone" className="control-label"></label>
                        <input asp-for="Phone" className="form-control" />
                        <span asp-validation-for="Phone" className="text-danger"></span>
                    </div>
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
                    <div className="form-group">
                        <label asp-for="PasswordConfirm" className="control-label"></label>
                        <input asp-for="PasswordConfirm" className="form-control" />
                        <span asp-validation-for="PasswordConfirm" className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Реєстрація" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default Registration;