import { useRef, type FormEvent } from "react";

type NewGoalProps ={
    onAddGoal: (goal:string, summary: string) => void;
}
export default function NewGoal({onAddGoal}: NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        // new FormData(event.currentTarget)
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal(enteredGoal,enteredSummary); 
        // if((enteredGoal != "") && (enteredSummary != "")) {
        //     onAddGoal(enteredGoal,enteredSummary);   
        // } else {
        //     const error = new Error(`Fields cannot be empty!!`)
        //     console.log(error)
        // }   
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal} required/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary} required/>
            </p> 
            <p>
                <button>Submit</button>
            </p>
        </form>
    )
}