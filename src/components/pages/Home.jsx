import CardContact from '../CardContact';
import CardContactMe from '../CardContactMe';
import CardCvDownload from '../CardCvDownload';
import CardHomePresentation from '../CardHomePresentation';
import CardJob from '../CardJob';
import Carrousel from '../Carrousel'
import SectionMid from '../SectionMid';
import './../../styles/Home.scss';


export default function Home() {
    return (
        <>
            <CardHomePresentation />
            <Carrousel />
        </>
    )
}