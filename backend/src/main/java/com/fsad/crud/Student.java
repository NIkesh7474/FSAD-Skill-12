package com.fsad.crud;

import jakarta.persistence.*;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String course;

    // Getters
    public Long   getId()     { return id;     }
    public String getName()   { return name;   }
    public String getEmail()  { return email;  }
    public String getCourse() { return course; }

    // Setters
    public void setName(String n)   { this.name   = n; }
    public void setEmail(String e)  { this.email  = e; }
    public void setCourse(String c) { this.course = c; }
}
