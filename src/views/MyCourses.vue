<template>
  <div>
<h3> My Courses </h3>
    <div class="container">
      <table>
          <tr>
            <th>Code</th>
            <th>Title</th>
            <th>Semester</th>
            <th>Homeworks</th>
            <th>Exam</th>
            <th>Grade</th>
          </tr>
          <tr class="item" v-for="course in courses" :key="course.id">
            <td @click="showdescription(course.id)" class="code">{{ course.code }} </td>
            <td>{{ course.title}} </td>
            <td>{{ course.semester }} </td>
            <td>{{ course.homeworks }} </td> 
            <td class="examRed" v-if="course.exam < 21">{{ course.exam }}</td>
            <td class="examBlue" v-else>{{ course.exam }}</td>
            <td class="gradeRed" v-if="course.exam < 21 || course.homeworks+course.exam < 51">{{ course.homeworks + course.exam }}</td>
            <td class="gradeBlue" v-else>{{ course.homeworks + course.exam }}</td>
          </tr>
      </table>
    </div>
    <div class="description" v-for="course in descriptionCourse" :key="course.id">
      <p><b>Course description: </b>{{ course.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCourses",
  data() {
    return {
      courses: [],
      descriptionCourse: [],
    };
  },
  methods: {
    fetchCourses() {
      fetch(`http://localhost:3000/api/mycourses/`)
        .then((response) => response.json())
        .then((data) => (this.courses = data))
        .catch((err) => console.log(err.message));
    },
    showdescription(courseId){
      fetch(`http://localhost:3000/api/mycourses/${courseId}`)
        .then((response) => response.json())
        .then((data) => (this.descriptionCourse = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchCourses();
    console.log("mounted");
  } 
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
th {
  background: rgb(100, 151, 122);
}
td {
  background: rgb(186, 228, 204);
}
th, td {
  font-size: 15px;
  margin-bottom: 5px;
  padding: 8px 10px;
}
.container {
  background: #d5d7d8;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
}
.examRed{
  background-color: red;
  color: white;
}
.examBlue{
  background-color: blue;
  color: white;
}
.gradeRed{
  background-color: red;
  color: white;
}
.gradeBlue{
  background-color: blue;
  color: white;
}
.description {
  background: yellow;
  /*box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);*/
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
}
.code:hover{
  background-color: yellow;
}
</style>