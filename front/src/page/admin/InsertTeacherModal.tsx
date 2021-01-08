import React, {useEffect, useState} from "react";
import {Input, Modal, Select} from "antd";
import instance from "../../axiosInstance";
import {College} from "../../entity/College";

const {Option} = Select;

interface ModalProps {
    visible: boolean,
    setVisible: (visible: boolean) => void
}


const InsertTeacherModal: React.FC<ModalProps> = ({visible, setVisible}) => {
    const [collegeList, setCollegeList] = useState<College[]>([])
    const [collegeId, setCollegeId] = useState<number | null>(null)

    const [teacherId, setTeacherId] = useState<string>()
    const [name, setName] = useState<string>()
    const [idCard, setIdCard] = useState<string>()

    useEffect(() => {
        instance.get<College[]>("/admin/getAllCollege")
            .then(response => setCollegeList(response.data))
    })

    const onSubmit = async () => {
        await instance.post("/admin/insertTeacher", {
            teacherId: teacherId,
            name: name,
            collegeId: collegeId,
            idCard: idCard
        })
        setVisible(false)
    }

    return (
        <Modal
            title="添加新教师"
            onCancel={() => setVisible(false)}
            visible={visible}
            onOk={onSubmit}>
            <Select placeholder={"学院"} style={{width: "100%"}} onChange={(value) => setCollegeId(value as number)}>
                {
                    collegeList.map(college => <Option value={college.id}>{college.name}</Option>)
                }
            </Select>
            <Input placeholder={"工号"}
                   onChange={(e) => setTeacherId(e.target.value)}
                   value={teacherId}/>
            <Input placeholder={"姓名"}
                   onChange={(e) => setName(e.target.value)}
                   value={name}/>
            <Input placeholder={"身份证号"}
                   onChange={(e) => setIdCard(e.target.value)}
                   value={idCard}/>
        </Modal>
    )
}

export default InsertTeacherModal