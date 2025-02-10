import './App.css'
import { CourseStaff } from "./components/course-staff.tsx";

function App() {

    return (
        <div>
            <h2>Welcome to my first React Application</h2>
            <div>
                <CourseStaff name="gchong" title="professor" rating={92} />
                <CourseStaff name="jchou" title="pookums" rating={101}/>
                <CourseStaff name="apetryk" title="degenerate" rating={12}/>
            </div>
        </div>
    )
}

export default App