import './Content.css';

// Helper functions
export const dateToString = (date) => {
    const dateStr = date.toString().split(' ')
    const month = dateStr[1]
    const year = dateStr[3]
    return `${month} ${year}`
}

// Inner info texts
export const CerInfo = ({ script }) => (
    <>
        <p><b>{script.id}</b></p>
        <p>Certified by: {script.by}</p>
        <p>Exam: {script.exam}</p>
    </>
)

export const ExpInfo = ({ script }) => (
    <>
        <p>
            <b>{script.position}</b>
        </p>
        <p>
            <b>{script.id}</b> &middot; {script.type}
        </p>
        <p>{dateToString(script.from)} - {dateToString(script.to)} &middot; {script.place}</p>

        <div className='LineBreak'></div>
        {script.desc.map(d => d)}
    </>
)

export const EduInfo = ({ script }) => (
    null
)

export const MooInfo = ({ script }) => (
    <>
        <p><b>{script.id}</b></p>
        <p>Certified by: {script.by}</p>
        <p>Instructor: {script.instructor}</p>
    </>
)
