package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepositiory extends JpaRepository<User,Long> {
    public Optional<User> findByEmail(String email);
    public boolean existsByEmail(String email);
}
