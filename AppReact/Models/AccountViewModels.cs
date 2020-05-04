using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppReact.Models
{
    public class LoginViewModel
    {
        [Display(Name = "Електронна адреса")]
        [Required(ErrorMessage = "Вкажіть пошту"), EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage = "Вкажіть пароль")]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }
        [Display(Name = "Запам'ятати мене")]
        public bool RememberMe { get; set; }
    }

    public class RegisterViewModel
    {
        [Required]
        [Display(Name = "Телефон")]
        public string Phone { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Електронна адреса")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Пароль має бути не менше {2} символів.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Подтвердить пароль")]
        [Compare("Password", ErrorMessage = "Пароль та підтвердження не збігаються.")]
        public string ConfirmPassword { get; set; }
    }
}
