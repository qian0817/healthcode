package com.healthcode.dao;

import com.google.common.collect.Lists;
import com.healthcode.common.HealthCodeException;
import com.healthcode.config.DatasourceConfig;
import com.healthcode.domain.HealthCodeType;
import com.healthcode.domain.Student;

import java.sql.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author zhenghong
 */
public class StudentDao {
    private final ClazzDao clazzDao = new ClazzDao();

    public Student getByUsername(String studentId) {
        try (Connection connection = DatasourceConfig.getConnection()) {
            try (PreparedStatement statement = connection.prepareStatement(
                    "SELECT name, password, class_id, id_card " +
                            "FROM student WHERE id = ?")) {
                statement.setString(1,studentId);
                try (ResultSet resultSet = statement.executeQuery()) {
                    if (!resultSet.next()) {
                        return null;
                    }
                    String name = resultSet.getString("name");
                    String password = resultSet.getString("password");
                    int classId = resultSet.getInt("class_id");
                    String idCard = resultSet.getString("id_card");

                    Student student = new Student();
                    student.setId(studentId);
                    student.setName(name);
                    student.setPassword(password);
                    student.setClazz(clazzDao.getById(classId));
                    student.setIdCard(idCard);
                    return student;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new HealthCodeException("获取学生失败");
        }
    }

    public void submitDailyCard(Student student, HealthCodeType healthCodeType){
        try (Connection connection = DatasourceConfig.getConnection()) {
            try (PreparedStatement statement = connection.prepareStatement(
                    "INSERT INTO student_daily_card (student_id, result, create_time) VALUES (?, ?, ?)")) {
                statement.setString(1, student.getId());
                statement.setString(2, healthCodeType.getType());
                statement.setTimestamp(3, new Timestamp(new Date().getTime()));
                statement.execute();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new HealthCodeException("提交学生打卡失败");
        }
    }

    public List<Student> listAll() {
        try (Connection connection = DatasourceConfig.getConnection()) {
            try (PreparedStatement statement = connection.prepareStatement(
                    "SELECT * FROM student ")) {
                try (ResultSet resultSet = statement.executeQuery()) {
                    ArrayList<Student> list = Lists.newArrayList();
                    while (resultSet.next()) {
                        Student student = new Student();
                        student.setId(resultSet.getString("id"));
                        student.setName(resultSet.getString("name"));
                        student.setPassword(resultSet.getString("password"));
                        student.setClazz(clazzDao.getById(resultSet.getInt("class_id")));
                        student.setIdCard(resultSet.getString("id_card"));
                        list.add(student);
                    }
                    return list;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new HealthCodeException("获取学生列表失败");
        }
    }

    public void insert(String id, String name, String password, int classId, String idCard){
        try (Connection connection = DatasourceConfig.getConnection()) {
            try (PreparedStatement statement = connection.prepareStatement(
                    "INSERT INTO student(id, name, password, class_id, id_card) VALUES (?, ?, ?, ?, ?)")) {
                statement.setString(1, id);
                statement.setString(2, name);
                statement.setString(3, password);
                statement.setInt(4, classId);
                statement.setString(5, idCard);

                statement.execute();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new HealthCodeException("添加学生失败");
        }
    }
}
