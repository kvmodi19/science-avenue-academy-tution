export default function Feature() {
    const programs = [
        {
            name: 'Creative Development & Program',
            description: `CAN CHOOSE THE RIGHT TEACHER WHO MAKES STUDY INTRESTING`
        },
        {
            name: 'Limited Students Per Batch',
            description: `ONE-TO-ONE TEACHING, MORE TIME AND ATTENTION`
        },
        {
            name: 'Quality Education by Experience Faculties',
            description: `INCREASED CONFIDENCE FLEXIBLE AND CONVENIENT`
        },
        {
            name: 'Regular Test & Revision',
            description: `CUSTOMISED LESSONS & HELP WITH REGULAR REVISION AND TEST PRACTICE`
        },
    ]
    return (
        <div className="container">
            <div className="row">

                {
                    programs.map((program, key) => (
                        <div className="col-md-3 col-sm-4" key={key}>
                            <div className="feature-thumb">
                                <span>{(key + 1).toString().padStart(2, '0')}</span>
                                <h3>{program.name}</h3>
                                <p>{program.description}</p>
                            </div>
                        </div>
                    ))

                }

            </div>
        </div>
    )
}