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
            <td>{{ course.exam }}</td>
            <td>{{ course.homeworks + course.exam }}</td>
          </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCourses",
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    fetchCourses() {
      fetch(`http://localhost:3000/api/mycourses/`)
        .then((response) => response.json())
        .then((data) => (this.courses = data))
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
</style>