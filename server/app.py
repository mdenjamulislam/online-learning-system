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
                    instructor_image VARCHAR(255),
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

# ---------------------
#   Courses 
# ---------------------

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
    
# Add new course
@app.route('/courses', methods=['POST'])
def add_course():
    try:
        data = request.get_json()
        
        # Required fields should match your database schema
        required_fields = [
            'title', 
            'price', 
            'description', 
            'instructor',
            'instructor_image',
            'category',
            'level',
            'video_url',
            'thum_url'
        ]
        
        # Check for all required fields
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({
                'error': f'Missing required fields: {", ".join(missing_fields)}'
            }), 400

        with connection.cursor() as cursor:
            sql = """INSERT INTO courses 
                    (title, price, description, instructor, 
                    instructor_image, category, level, video_url, thum_url) 
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"""
            
            cursor.execute(sql, (
                data['title'],
                data['price'],
                data['description'],
                data['instructor'],
                data['instructor_image'],
                data['category'],
                data['level'],
                data['video_url'],
                data['thum_url']
            ))
            
            connection.commit()
            return jsonify({
                'message': 'Course added successfully!',
                'id': cursor.lastrowid
            }), 201
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Update course
# Update course
@app.route('/courses/<int:course_id>', methods=['PUT'])
def update_course(course_id):
    try:
        data = request.get_json()
        updates = []
        params = []

        # Add all possible fields that can be updated
        fields_mapping = {
            'title': "title = %s",
            'price': "price = %s",
            'description': "description = %s",
            'instructor': "instructor = %s",
            'instructor_image': "instructor_image = %s",
            'category': "category = %s",
            'level': "level = %s",
            'video_url': "video_url = %s",
            'thum_url': "thum_url = %s"
        }

        for field, sql_part in fields_mapping.items():
            if field in data:
                updates.append(sql_part)
                params.append(data[field])

        if not updates:
            return jsonify({'error': 'No fields to update'}), 400

        params.append(course_id)
        
        with connection.cursor() as cursor:
            sql = f"UPDATE courses SET {', '.join(updates)} WHERE id = %s"
            cursor.execute(sql, params)
            connection.commit()
            
            if cursor.rowcount == 0:
                return jsonify({'error': 'Course not found'}), 404
                
            return jsonify({'message': 'Course updated successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Delete course
@app.route('/courses/<int:course_id>', methods=['DELETE'])
def delete_course(course_id):
    try:
        with connection.cursor() as cursor:
            cursor.execute("DELETE FROM courses WHERE id = %s", (course_id,))
            connection.commit()
            
            if cursor.rowcount == 0:
                return jsonify({'error': 'Course not found'}), 404
                
            return jsonify({'message': 'Course deleted successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500



# ---------------------
#   Student
# ---------------------

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