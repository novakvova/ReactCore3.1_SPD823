using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppReact.Abstarct;
using AppReact.Entities;
using AppReact.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AppReact.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<DbUser> _userManager;
        private readonly SignInManager<DbUser> _signInManager;
        private readonly IJWTTokenService _jwtTokenService;

        public AccountController(
            UserManager<DbUser> userManager,
            SignInManager<DbUser> signInManager,
            IJWTTokenService jWTTokenService
            )
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._jwtTokenService = jWTTokenService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel loginModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    invalid = "Не валідна модель"
                });
            }
            var result = await _signInManager
                .PasswordSignInAsync(loginModel.Email, loginModel.Password,
                false, false);

            if (!result.Succeeded)
            {
                return BadRequest(new
                {
                    invalid = "Не правильно введені дані!"
                });
            }
            var user = await _userManager.FindByEmailAsync(loginModel.Email);
            await _signInManager.SignInAsync(user, isPersistent: false);
            return Ok(
            new
            {
                token = _jwtTokenService.CreateToken(user)
            });
        }
    }
}