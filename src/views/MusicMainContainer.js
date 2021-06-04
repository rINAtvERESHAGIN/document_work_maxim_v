import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GridExample from "./GridExample";
import FormDialog from "./FormDialog";
import DatePickerField from "./DatePickerField";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MusicMainContainer = () => {
    const [tableData, setTableData] = useState(undefined);

    useEffect(() => {
        console.log('TABLE DATA', tableData);
    }, [tableData])

    const updateData = (data) => {
        setTableData(data);
    };

    useEffect(() => {
        fetchAllData();
    }, []);


    const fetchAllData = async () => {
        fetch('http://127.0.0.1:8000/polls/get_all_music/')
            .then((resp) => resp.json())
            .then((data) => setTableData(data));
    }
    return (
        <Container>
            <FormDialog updateData={updateData}/>
            <GridExample tableData={tableData}/>
        </Container>
    )
};

export default MusicMainContainer;