import { observable, computed, action} from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { sortBy, filter, sumBy, maxBy } from 'lodash-es'

export class EmployeeModel {
  @observable isLogin: boolean = false
  @observable department = [
    {
      id: 'account111',
      name: 'Phòng Kế Toán'
    },
    {
      id: 'persion211',
      name: 'Phòng Nhân Sự'
    },
    {
      id: 'produce212',
      name: 'Phòng sản xuất'
    }
  ]

  @observable employee = [
    {
      id: uuidv4(),
      name: 'Lê Văn An',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Đình',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Huy',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Duy',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Trần Văn Tùng',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Lê Đình Anh',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Bắc',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Đào Viết Chung',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Uy',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Thị Ánh',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Trần Duy Hưng',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Đào Bá Lộc',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Chung',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Lý Thê Dân',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Lê An',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Lang',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Bợm',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Đào Văn Tùng',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Dương',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Lê Vân Anh',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Vân Anh',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Đào Cỏ Bò',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Cao Thái Sơn',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Cao Hơn Núi',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Cao Như Núi',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Cao Ngang Núi',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Đặng Thuỳ Chi',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Tùng Vân',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Phan Văn D',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Tuấn Anh',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Á',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Đào Bích',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Đình',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Huy',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Duy',
      age: 25,
      salary: 25,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Trần Văn Tùng',
      age: 20,
      salary: 20,
      departmentId: 'produce212'
    },
    {
      id: uuidv4(),
      name: 'Lê Đình Anh',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Nguyễn Văn Bắc',
      age: 20,
      salary: 20,
      departmentId: 'account111'
    },
    {
      id: uuidv4(),
      name: 'Đào Viết Chung',
      age: 20,
      salary: 20,
      departmentId: 'persion211'
    },
  ]
  @computed get topSalaryest() {
    const sortedListEmoloyee = sortBy(this.employee,['salary'])
    return sortedListEmoloyee.slice(0,10)
  }
  @computed get roomSalalrest() {
    const departmentDetailArr = []
    for (const e of this.department) {
      const department = filter(this.employee,['departmentId', e.id])
      departmentDetailArr.push({id: e.id, total: sumBy(department, 'salary')})
    }
    return sortBy(filter(this.employee,['departmentId', maxBy(departmentDetailArr, 'total')?.id]),['name'])
  }
  @action.bound updateEmployee (id: string, name: string, age: any, salary: any, departmentId: string) {
    const index = this.employee.findIndex(item => item.id === id)
    console.log(index)
    if (index === -1) {
      this.employee.push(
        {
          id: uuidv4(),
          name: name,
          age: age,
          salary: salary,
          departmentId: departmentId
        })
    } else {
      this.employee.splice(index, 1, { id: id, name: name, age: age, salary: salary, departmentId: departmentId })
    }
  }
}

export const employeeModel = new EmployeeModel()



