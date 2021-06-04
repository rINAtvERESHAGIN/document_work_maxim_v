import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UploadFiles from "./UploadFiles";
import {Autocomplete} from "@material-ui/lab";
import DatePickerField from "./DatePickerField";
import axios from "axios";

/*
executor - исполнитель
composer - композитор
genre - жанр
label - лейбл
nominations - номинации
release date - дата выхлда
songwriter - автор песни
*/

export default function FormDialog({updateData}) {
    const [open, setOpen] = React.useState(false);

    const [composer, setComposer] = React.useState(""); //композитор
    const [executor, setExecutor] = React.useState(""); //исполнитель
    const [genre, setGenre] = React.useState(""); //жанр
    const [label, setLabel] = React.useState(""); // автор песни
    const [nominations, setNominations] = React.useState(""); //номинации
    const [release_date, setRelease_date] = React.useState(""); // автор песни
    const [songwriter, setSongwriter] = React.useState(""); // автор песни
    const [file_in_binary, setFileBinary] = React.useState('');

    // meta data
    const [file_name, setFileName] = React.useState('');

    /*FIELDS INPUTS*/
    const handleOnChangeComposer = (e) => {
        setComposer(e.target.value)
    };
    const handleOnChangeExecutor = (e) => {
        setExecutor(e.target.value)
    };
    const handleOnChangeGenre = (e) => {
        setGenre(e.target.value)
    };

    const handleOnChangeLabel = (e) => {
        setLabel(e.target.value)
    };
    const handleOnChangeNominations = (e) => {
        setNominations(e.target.value)
    };
    const handleOnChangeReleaseDate = (value) => {
        setRelease_date(value);
    };
    const handleOnChangeSongwriter = (e) => {
        setSongwriter(e.target.value)
    };
    const handleOnChangeFileBinary = (binar, name) => {
        setFileBinary(binar);
        setFileName(name);
    };

    /*BUTTONS ------ */
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnAdd = async () => {
        const data = {
            composer: composer !== "" ? composer : "пусто",
            executor: executor !== "" ? executor : "пусто",
            genre: genre !== "" ? genre : "пусто",
            label: label !== "" ? label : "пусто",
            nominations: nominations !== "" ? nominations : "пусто",
            release_date: release_date !== "" ? release_date : "пусто",
            songwriter: songwriter !== "" ? songwriter : "пусто",
            file_in_binary: file_in_binary !== "" ? file_in_binary : "пусто",
            file_name: file_name !== "" ? file_name : "пусто.docx",
        }

        console.log('data', data);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify(data);

        const url = "http://127.0.0.1:8000/polls/add_music/";

        await axios.post(url, body, config)
            .then(res => {
                updateData(res.data);
            }).finally(() => {
                handleClose();
            });
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Добавить информацию о музыке
            </Button>
            <Dialog open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"

            >
                <DialogTitle id="form-dialog-title">Новая информация о музыке</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Добавления информации о музыке и загрузка файла с текстом песни
                    </DialogContentText>

                    <TextField
                        id="composer"
                        autoFocus
                        margin="dense"
                        label="Композитор"
                        type={"string"}
                        fullWidth
                        value={composer}
                        onChange={handleOnChangeComposer}
                    />

                    <TextField
                        id="executor"
                        autoFocus
                        margin="dense"
                        label="Исполнитель"
                        type={"string"}
                        fullWidth
                        value={executor}
                        onChange={handleOnChangeExecutor}
                    />

                    <Autocomplete
                        size={"medium"}
                        id="combo-box-demo"
                        options={allGenre}
                        getOptionLabel={(option) => option}
                        onSelect={handleOnChangeGenre}
                        renderInput={(params) => (
                            <TextField {...params}
                                       label="Жанр"
                                       value={genre}
                                       onChange={handleOnChangeGenre}
                            />
                        )}
                    />

                    <TextField
                        id="executor"
                        autoFocus
                        margin="dense"
                        label="Исполнитель"
                        type={"string"}
                        fullWidth
                        value={label}
                        onChange={handleOnChangeLabel}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Номинация"
                        type={"string"}
                        fullWidth
                        value={nominations}
                        onChange={handleOnChangeNominations}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="songwriter"
                        label="Автор"
                        type={"string"}
                        fullWidth
                        value={songwriter}
                        onChange={handleOnChangeSongwriter}
                    />

                    <DatePickerField newFieldStateAcquired={handleOnChangeReleaseDate}/>


                    <UploadFiles addBinary={handleOnChangeFileBinary}/>


                </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleOnAdd} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


const allGenre = ["Поп", "Кантри", "Блюз", "Джаз", "Электронная музыка", "Рок", "Хип-хоп", "Классическая"];