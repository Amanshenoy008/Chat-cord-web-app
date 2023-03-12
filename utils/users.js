const users=[]

const userjoin= (id,username,room)=>{

    const user = {id, username , room}

    users.push(user)

    return user
}

const getcurrentuser = (id)=>{
    return users.find(user=>user.id==id)
}

module.exports = {
    userjoin ,
    getcurrentuser
}