import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Ref = () => {
  const navigate = useNavigate();

  const goDownload = (ref) => {
    window.scrollTo({
        top:ref.offsetTop,
        left:0,
        behavior:"smooth"
    })
  }

  const success = () =>{
    alert("Download Berhasil!")
  }

  const linkRef = useRef(null);

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Link Reference</h1>
          <button className="Button" onClick={() => goDownload(linkRef.current)}>Generate Link</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            delectus enim eius dicta, repellendus magnam obcaecati expedita
            facilis nostrum. Officia dolorum hic eos repellendus assumenda odit
            expedita architecto omnis. Ullam recusandae excepturi, fuga iste
            tempore corporis similique dicta minus ipsa necessitatibus nisi
            dignissimos, veritatis officiis veniam ratione delectus? Nemo odio
            nisi deleniti, totam delectus ullam inventore itaque molestias
            reiciendis nostrum natus et magnam possimus aliquid nobis unde
            expedita veniam, provident veritatis quaerat consectetur aut
            excepturi. Deleniti, earum voluptas eaque ipsum dolor laborum dolore
            quasi perferendis necessitatibus libero nihil, ipsam reiciendis
            dicta, cum error pariatur repudiandae deserunt minima maxime facere
            aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            delectus enim eius dicta, repellendus magnam obcaecati expedita
            facilis nostrum. Officia dolorum hic eos repellendus assumenda odit
            expedita architecto omnis. Ullam recusandae excepturi, fuga iste
            tempore corporis similique dicta minus ipsa necessitatibus nisi
            dignissimos, veritatis officiis veniam ratione delectus? Nemo odio
            nisi deleniti, totam delectus ullam inventore itaque molestias
            reiciendis nostrum natus et magnam possimus aliquid nobis unde
            expedita veniam, provident veritatis quaerat consectetur aut
            excepturi. Deleniti, earum voluptas eaque ipsum dolor laborum dolore
            quasi perferendis necessitatibus libero nihil, ipsam reiciendis
            dicta, cum error pariatur repudiandae deserunt minima maxime facere
            aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            delectus enim eius dicta, repellendus magnam obcaecati expedita
            facilis nostrum. Officia dolorum hic eos repellendus assumenda odit
            expedita architecto omnis. Ullam recusandae excepturi, fuga iste
            tempore corporis similique dicta minus ipsa necessitatibus nisi
            dignissimos, veritatis officiis veniam ratione delectus? Nemo odio
            nisi deleniti, totam delectus ullam inventore itaque molestias
            reiciendis nostrum natus et magnam possimus aliquid nobis unde
            expedita veniam, provident veritatis quaerat consectetur aut
            excepturi. Deleniti, earum voluptas eaque ipsum dolor laborum dolore
            quasi perferendis necessitatibus libero nihil, ipsam reiciendis
            dicta, cum error pariatur repudiandae deserunt minima maxime facere
            aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            delectus enim eius dicta, repellendus magnam obcaecati expedita
            facilis nostrum. Officia dolorum hic eos repellendus assumenda odit
            expedita architecto omnis. Ullam recusandae excepturi, fuga iste
            tempore corporis similique dicta minus ipsa necessitatibus nisi
            dignissimos, veritatis officiis veniam ratione delectus? Nemo odio
            nisi deleniti, totam delectus ullam inventore itaque molestias
            reiciendis nostrum natus et magnam possimus aliquid nobis unde
            expedita veniam, provident veritatis quaerat consectetur aut
            excepturi. Deleniti, earum voluptas eaque ipsum dolor laborum dolore
            quasi perferendis necessitatibus libero nihil, ipsam reiciendis
            dicta, cum error pariatur repudiandae deserunt minima maxime facere
            aliquid.
          </p>
          <button className="Button" ref={linkRef} onClick={()=>success()}>Download</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            delectus enim eius dicta, repellendus magnam obcaecati expedita
            facilis nostrum. Officia dolorum hic eos repellendus assumenda odit
            expedita architecto omnis. Ullam recusandae excepturi, fuga iste
            tempore corporis similique dicta minus ipsa necessitatibus nisi
            dignissimos, veritatis officiis veniam ratione delectus? Nemo odio
            nisi deleniti, totam delectus ullam inventore itaque molestias
            reiciendis nostrum natus et magnam possimus aliquid nobis unde
            expedita veniam, provident veritatis quaerat consectetur aut
            excepturi. Deleniti, earum voluptas eaque ipsum dolor laborum dolore
            quasi perferendis necessitatibus libero nihil, ipsam reiciendis
            dicta, cum error pariatur repudiandae deserunt minima maxime facere
            aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            delectus enim eius dicta, repellendus magnam obcaecati expedita
            facilis nostrum. Officia dolorum hic eos repellendus assumenda odit
            expedita architecto omnis. Ullam recusandae excepturi, fuga iste
            tempore corporis similique dicta minus ipsa necessitatibus nisi
            dignissimos, veritatis officiis veniam ratione delectus? Nemo odio
            nisi deleniti, totam delectus ullam inventore itaque molestias
            reiciendis nostrum natus et magnam possimus aliquid nobis unde
            expedita veniam, provident veritatis quaerat consectetur aut
            excepturi. Deleniti, earum voluptas eaque ipsum dolor laborum dolore
            quasi perferendis necessitatibus libero nihil, ipsam reiciendis
            dicta, cum error pariatur repudiandae deserunt minima maxime facere
            aliquid.
          </p>
          <button className="Button" onClick={() => navigate("/react.js-by-maolaart/about/practice")}>
            Back
          </button>
        </header>
      </div>
    </div>
  );
};

export default Ref;
