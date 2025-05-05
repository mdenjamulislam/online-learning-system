from flask import Flask, jsonify,  request
from flask_cors import CORS
import pymysql.cursors

app = Flask(__name__)
CORS(app)

# Configuration MySQL Connection
connection = pymysql.connect(
    host='localhost',
    user='root',
    passwd='',
    database='learning_system',
    cursorclass=pymysql.cursors.DictCursor
)

@app.route('/')
def init_db():
    try: 
        with connection.cursor() as cursor:
            # Create courses table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS courses (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    category VARCHAR(255) NOT NULL,
                    level VARCHAR(255), ## Beginner, Intermediate, Advanced
                    description TEXT,
                    instructor VARCHAR(255),
                    insstructor_image VARCHAR(255),
                    price DECIMAL(5,2),
                    video_url VARCHAR(255),
                    thum_url VARCHAR(255)
                )
            ''')
            # Create Students table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    date_of_birth DATE,
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    phone VARCHAR(15),
                    address VARCHAR(255),
                    profile_picture VARCHAR(255),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            # Create Enrollments table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS enrollments (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    student_id INT,
                    course_id INT,
                    FOREIGN KEY (student_id) REFERENCES students(id),
                    FOREIGN KEY (course_id) REFERENCES courses(id)
                )
            ''')
            
            connection.commit()
            return jsonify({'message': "Databse initilise successfully!"})
    except Exception as e:
        return jsonify({'error': str(e)})
    

# Get data from database

# Get all courses
@app.route('/courses', methods=['GET'])
def get_courses():
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM courses")
            courses = cursor.fetchall()
            return jsonify(courses)
    except Exception as e:
        return jsonify({'error': str(e)})
    
# Get course by id
@app.route('/courses/<int:course_id>', methods=['GET'])
def get_course_by_id(course_id):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM courses WHERE id = %s", (course_id,))
            course = cursor.fetchone()
            return jsonify(course)
    except Exception as e:
        return jsonify({'error': str(e)})
    
# Get all students
@app.route('/students', methods=['GET'])
def get_students():
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM students")
            students = cursor.fetchall()
            return jsonify(students)
    except Exception as e:
        return jsonify({'error': str(e)})
    
# Get student by id
@app.route('/students/<int:student_id>', methods=['GET'])
def get_student_by_id(student_id):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM students WHERE id = %s", (student_id,))
            student = cursor.fetchone()
            return jsonify(student)
    except Exception as e:
        return jsonify({'error': str(e)})
    
# Get all enrollments
@app.route('/enrollments', methods=['GET'])
def get_enrollments():
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM enrollments")
            enrollments = cursor.fetchall()
            return jsonify(enrollments)
    except Exception as e:
        return jsonify({'error': str(e)})
    
# Get enrollment by id
@app.route('/enrollments/<int:enrollment_id>', methods=['GET'])
def get_enrollment_by_id(enrollment_id):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM enrollments WHERE id = %s", (enrollment_id,))
            enrollment = cursor.fetchone()
            return jsonify(enrollment)
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)