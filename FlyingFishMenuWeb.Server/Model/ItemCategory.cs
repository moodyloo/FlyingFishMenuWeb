﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FlyingFishMenuWeb.Server.Model;

public partial class ItemCategory
{
    public int Id { get; set; }

    public string CategoryName { get; set; }

    public bool? IsSetMeal { get; set; }

    public string ImageUrl { get; set; }

    [JsonIgnore]
    public virtual ICollection<MenuItem> MenuItems { get; set; } = new List<MenuItem>();
}