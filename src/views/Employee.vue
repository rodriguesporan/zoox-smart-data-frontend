<template>
  <div>
    <EmployeeForm @add:employee="addEmployee" />
    <EmployeeTable :employees="employees" />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeTable from '@/components/EmployeeTable'
import EmployeeForm from '@/components/EmployeeForm'

export default {
  name: 'state',
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: 'Richard Hendricks',
          email: 'richard@piedpiper.com'
        },
        {
          id: 2,
          name: 'Bertram Gilfoyle',
          email: 'gilfoyle@piedpiper.com'
        },
        {
          id: 3,
          name: 'Dinesh Chugtai',
          email: 'dinesh@piedpiper.com'
        }
      ]
    }
  },
  methods: {
    addEmployee(employee) {
      this.employees = [...this.employees, employee]
      console.log(employee)
    }
  }
}
</script>
