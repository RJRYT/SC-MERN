import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Terms = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-0 m-0">
      <div className="bg-custom-dark-purple text-white p-6 pt-12 h-28 flex items-center justify-between"> 
        <button className="rounded-full border-2 border-white flex justify-center items-center p-1">
          <IoIosArrowBack className="text-white text-3xl" />
        </button>
        <h6 className="text-center font-semibold w-full md:w-auto md:flex-grow-0 text-lg md:text-xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          TERMS & CONDITIONS
        </h6>
      </div>
      <div className="flex-grow p-6 pt-8 md:px-24"> {/* Added left and right padding for desktop */}
        <div className="space-y-4 md:space-y-0 sm:mt-24 md:mt-0"> 
          <h6 className="mb-4 text-xxs md:text-lg font-semibold text-indigo-900 md:text-left">Condition & Attending</h6>
          <p className="text-xxs md:text-base md:text-left lg:mb-8 sm:pb-4 text-gray-700">
            At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?
          </p>
          <p className="text-xxs md:text-base md:text-left text-gray-700">
            Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare. Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praeoptentem, ut M. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.
          </p>
        </div>
        
        <div className="mt-8 space-y-4 md:space-y-0 sm:mb-24 md:mb-0">
          <h6 className="mt-8 mb-4 text-xxs md:text-lg font-semibold text-indigo-900 md:text-left">Terms & Use</h6>
          <p className="text-xxs md:text-base md:text-left lg:mb-8 sm:pb-4 text-gray-700">
            Ut proverbia non nulla veriora sint quam vestra dogmata. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Omnes enim iucundum motum, quo sensus hilaretur. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Quibusnam praetereitis? Portenta haec esse dicit, quidam hactenus; Si id dicis, vicimus. Qui ita affectus, beatum esse numquam probabis; Igitur neque stultorum quisquam beatus neque sapientium non beatus.
          </p>
          <p className="text-xxs md:text-base md:text-left text-gray-700">
            Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dolor ergo, id est summum malum, metuetur semper, etiamsi non ader.
          </p>

        
        </div>
        
      </div>
      <hr className="sm:hidden 320:inline-block border-b-8 border-gray-300 mt-12 mb-3 mx-auto w-1/2"/>
    </div>
  );
}

export default Terms;
