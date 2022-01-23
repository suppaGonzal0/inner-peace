import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Exercise.css'

function Exercise() {

    const exercises = [{ "Name": "Burpees", "how": "Stand up straight, then get into a squat position with your hands on the floor in front of you. Kick your feet back into a push up position and lower your body so that your chest touches the floor. Jump and return your feet to the squat position as fast as possible. Immediately jump up into the air as high as you can. Add a little clap for pizazz!" },
    { "Name": "Squats", "how": "Stand with your feed hip-width apart while pulling your shoulders back and engaging your abs. Push your butt and hips back as if you were sitting in a chair. While keeping your weight on your heels, lower down until your thighs are parallel or lower to the floor. Raise back up to the starting position, squeezing your butt and pushing your knees outward as you straighten." },
    { "Name": "Step ups", "how": "Stand in front of a box or an elevated surface, pulling your shoulders back and keeping your abs tight. Set your left leg onto the box, then step to top of the box making sure your feet are flat. Step back down with the same leg, then repeat with your right leg." },
    { "Name": "Pull ups", "how": "Start by hanging from a pull up bar with your palms facing away from you. Keeping your chest up and your shoulders back, squeeze your glutes and cross your feet, then pull yourself up so that your chin rests over the bar. Lower back down with control." },
    { "Name": "Push ups", "how": "Start in a plank position, with your shoulders directly over your hands. Tighten your abs, glutes and thighs, then lower yourself down so that your chest touches the floor while keeping your elbows as close to your body as possible. Push yourself back up into the starting position and repeat." },
    { "Name": "Dips", "how": "Stand in between a set of parallel bars. Grab the bars, straighten your arms, and hoist yourself up off the ground while slightly crossing your legs. While pulling your shoulders back and keeping your chest up, lower yourself down so that your elbows are parallel to the floor. Raise yourself back up to the starting position so that your arms are straight." },
    { "Name": "Jump lunges", "how": "Start in a lunge position with your knees touching or almost touching the floor. Jump up explosively and switch legs so that your rear leg is in the front and front leg is in the rear, then repeat as fast as you can." },
    { "Name": "Kettlebell swings", "how": "Stand with your legs hip-width apart, holding a kettlebell between them. Allow the kettlebell to swing slightly behind your legs, then propel your hips forward, bringing the kettlebell straight over your head. Keep your eyes on the kettlebell and point it straight up or slightly forward. Pull the kettlebell down from the sky and repeat." },
    { "Name": "Handstands", "how": "Start with your hands on a floor in an area where there’s nothing around you to bump into. Jump or tuck up with control and hold the handstand. Lower yourself down with control." },
    { "Name": "Box jumps", "how": "Stand in front of a box or sturdy raised surface. Jump up onto the box, landing with both of your feet on top then straighten your legs. Jump back down from the box, then immediately jump back up and do it all over again." }
    ]

    return <div className='exercisesContainer'>
        <Navbar />
        <div className="exercisesBody">
            <h1>Exercises</h1>
            <p>Explore our handpicked list of exercises.</p>
            <div className="exercisesList">
                {exercises.map((el, idx) => (
                    <div className='exerciseCollapseContainer' key={idx}>
                        <div className="exerciseCollapse">
                            <h1>{el.Name}</h1>
                        </div>
                        <div className="exerciseDiv">
                            <p>{el.how}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>;
}

export default Exercise;
