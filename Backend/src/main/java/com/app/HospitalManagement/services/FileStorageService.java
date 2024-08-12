package com.app.HospitalManagement.services;

import com.app.HospitalManagement.exception.NoRecordFoundException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@Transactional
public class FileStorageService {
    @Value("${file.upload.location}")
    private String uploadDir;
    // we have to work on the this getting the null pointer exception
    //java.lang.NullPointerException
    //	at com.app.HospitalManagement.services.FileStorageService.saveFile(FileStorageService.java:31)
    public String saveFile(MultipartFile file) throws IOException {
        // Ensure the upload directory exists
        Files.createDirectories(Paths.get(uploadDir));

        // Generate a unique file name
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir).resolve(fileName);

        // Copy the file to the target location
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        }

        return fileName;
    }

    // Method to load a file
    public Resource loadFile(String fileName) throws MalformedURLException {
        Path filePath = Paths.get(uploadDir).resolve(fileName).normalize();
        Resource resource = new UrlResource(filePath.toUri());
        // Check if the resource exists
        if (!resource.exists()) {
            throw new NoRecordFoundException("File not found: " + fileName);
        }
        return resource;
    }
}
