<template>
  <div class="app-container"  >
   <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template #default="scope">
          {{ scope.$index}}
        </template>
      </el-table-column>
     <el-table-column label="Title">
        <template #default="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template #default="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template #default="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template #default="scope">
          <el-tag :type="scope.row.type">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template #default="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
	  statusFilter(status) {
	    const statusMap = {
	      published: 'success',
	      draft: 'info',
	      deleted: 'danger'
	    }
	    return statusMap[status]
	 },
    fetchData() {
		this.listLoading=true
      getList().then(response => {
		  this.listLoading=false
		  for(let i of response.data.items){
			  i.type =this.statusFilter(i.status)
		  }
        this.list = response.data.items
      })
    }
  }
}
</script>
