import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TestPage() {
  const form = useForm();

  const [onOff, setOnOff] = useState(false);
  return (
    <div>
      {onOff ? (
        <div>
          <form>
            <p>With form.register() here, we get act warnings</p>
            <input name="name" ref={form.register()} />
            <button>submit</button>
          </form>
        </div>
      ) : (
        <div>nothing</div>
      )}
      <button onClick={() => setOnOff(!onOff)}>Toggle form</button>
    </div>
  );
}
