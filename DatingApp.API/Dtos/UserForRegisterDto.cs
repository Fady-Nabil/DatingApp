using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Username is required.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must Specify Password Between 4 and 8 Characters")]
        public string Password { get; set; }
    }
}