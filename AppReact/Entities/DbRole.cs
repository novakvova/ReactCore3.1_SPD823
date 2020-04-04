using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace AppReact.Entities
{
    public class DbRole : IdentityRole<long>
    {
        public ICollection<DbUserRole> UserRoles { get; set; }
    }
}