package com.fsad.crud;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService s) {
        this.service = s;
    }

    // GET all students
    @GetMapping
    public List<Student> getAll() {
        return service.getAll();
    }

    // POST add student
    @PostMapping
    public Student add(@RequestBody Student s) {
        return service.save(s);
    }

    // PUT update student
    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@PathVariable Long id,
                                          @RequestBody Student s) {
        return ResponseEntity.ok(service.update(id, s));
    }

    // DELETE student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
