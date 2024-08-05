package com.app.HospitalManagement.repositories;

import com.app.HospitalManagement.entites.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepositiory extends JpaRepository<UserEntity,Long> {
    public Optional<UserEntity> findByEmail(String email);
    public boolean existsByEmail(String email);
}
