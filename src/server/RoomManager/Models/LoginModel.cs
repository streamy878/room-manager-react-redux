﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RoomManager.Models
{
    public class LoginModel
    {
        [Required]
        //[EmailAddress]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}