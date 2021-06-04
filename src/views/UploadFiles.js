import React from "react";
import {DropzoneArea} from 'material-ui-dropzone'
import styled from "styled-components";
import {AttachFile, Description, PictureAsPdf, Theaters} from '@material-ui/icons';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const Container = styled.div`
  margin-top: 8px;
`;


class UploadFiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            selectedFiles: [],
            fileInBinaryFormat: undefined,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('state', this.state);
    }

    handleChange(files = []) {
        if (files.length > 0) {
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);

            let fileInBinaryFormatTmp = undefined;

            reader.onload = ev => {
                fileInBinaryFormatTmp = ev.target.result;
                this.props.addBinary(fileInBinaryFormatTmp, this.state.files[0].name);

                this.setState({fileInBinaryFormat: fileInBinaryFormatTmp});
            };
        }

        this.setState({
            files: files,
        });
    }

    handlePreviewIcon = (fileObject, classes) => {
        const {type} = fileObject.file
        const iconProps = {
            className: classes.image,
        }

        if (type.startsWith("video/")) return <Theaters {...iconProps} />
        if (type.startsWith("audio/")) return <AudiotrackIcon {...iconProps} />

        switch (type) {
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                return <Description {...iconProps} />
            case "application/pdf":
                return <PictureAsPdf {...iconProps} />
            default:
                return <AttachFile {...iconProps} />
        }
    }

    render() {
        return (
            <Container>
                <DropzoneArea
                    dropzoneText={"Перетащите или кликните по полю для добавления файла в загрузку"}
                    getPreviewIcon={this.handlePreviewIcon}
                    onChange={this.handleChange.bind(this)}
                    showFileNames
                />
            </Container>
        )
    }
}


export default UploadFiles;