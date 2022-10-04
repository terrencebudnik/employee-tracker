INSERT INTO department(name)
VALUES
    ("Engineering"),
    ("Sales"),
    ("IT");

INSERT INTO role(title,salary,department_id)
VALUES 
    ("Engineer", 70000, 1),
    ("Salesperson", 60000, 2),
    ("Tech", 65000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Anthony", "Stark", 1, 4),
    ("Natalie", "Roman", 2, 5),
    ("Bruce", "Banner", 3, 6); 