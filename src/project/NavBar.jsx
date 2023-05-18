import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function NavBar(props) {
  return (
    <nav
      className={`${
        props.isDarkMode ? "bg-[black]" : "bg-[lightGrey]"
      } m-[0.5rem] p-[1rem] rounded-[0.5rem] flex items-center `}
    >
      <div className="logo flex-[1] ">
        <img
          className="w-[80px] h-[60px]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABR1BMVEUdJiX////Z1MHjpjuvra5YYWB1eXrmqDuQkZP8uCfqqzwAGyQYIiEZJCUAGiToqTyzsbIAGCQVIiUUHx7f2sbm5ucAAAD29vZVXl0NHyS0hzXy8vKqqKnaoDrVnTkkLSwAExbLlzgtNTTU0L0OGxpMVVQAEBPEwbAPHBpBSknCkTc9OSicdzKJajCqgDRZSipKQSm2tKShoJMAEyTFw8TxoC9qbm82NShjUSwoLSaTcDFpVS19Yi57fHJUWFJoamKWlYk8QUGHh4hucGfS09S5iifwsCfd3t7clS6gcCtHPilnUyyGh3y9uqoACgebnZ4+R0zgpid4XBcADBhQT0W0ll5TRB50IyilIigEJiTErIP+x2G0Iin7HyuDIyiShW3/2JZmJCfpICrVISr/2Yf+thh+clr/6LTbwpr9w1W6fyzDhi1ZUTuDpVPXAAARQklEQVR4nO1d+3fi2JFWLIQw0gUh8RIGJITAFmAwNsPDYLdF0+0Zv9ikk930zOaxSWYn27P//89bda8kHn50T3KyfYT1nTNjt03rcD9VffVV3Yua4yJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhwusDIaquS1IqlUlJkqTrKiFf+y19RRBVSmXO1FFvOjs+73S73c758fG01yZnQI/+2pghBCJDmozPu62KKIrpZDKdxq9p9pVvdc+noxQS80qYUfWUOpp2WnwymYT1B1j7ntIktrqzNpF09Wu/4X81VElvT7u1gA26+qTIV6qICo9E0VChv0sma6XZjZpSdzdc1JTeO4f4oEtGNtLVWqtzPB33bkYTjnCTUftkPJ11Sq2qiMwwXvhaZ8yl9K/95v8VIFKm14G10pWmMQLOb28mKsqprkKxoVBVKEKpjD5pj49LNSSGvbraHUupHUsiop+NzqsiWyLw0ZmOVElSn80JIEeX1Emv00p6vIiVTvtsh4oRkdRpC1UDbrlY6U7Vsy+rKFCsM9LYD650sjbjdiRY1FT7vEIJEcVqpyelftHdRl5Ozms8RgtoS+dGCj8rauqkxCdpyiAh0jPpIsuapsmy/PQ1JAloocGSFEtjPdx6q2fGLdFby5R74hZrtmk286bhOpeXl45r2PmmadraI25USe11eaQlLdamoa1ChNPPbikjYrJyPtp267IGZHCXF3en/cN6vb6HgK/1+9Ori0sDqNE2Xw9JNDmuMlGqzTLhlFs1M6bxLiZrU13aWIIM0WG8uerXsxR7G6A/qvev3lgQMRsBo2LYsUtWZ1L4YkWVeuzti63eRg0lqqlZb08PH3Gx94iaw9MLV96IF6JmPHlKVqdhc/3qDWOEL/Uy6zdUM8nl1f3eOh/wPQ2WpyjKZu+vLo2mtn7lzE2XsdLqhYsUqZPExC+drBsK2TQvrw5XfCATh/f9/imi378/rD/OpD0Ml0ugcnUZNdPuAtt8spT5/1/YPwGpk+bF0sl66dWa1t3hXnZ9rReXlgFS24RaA//ZnOVeXpzeP6Ewh1dO015dHSxPFygPISc8t8oaYjbf9NcJub+wbCy6MnUmzJzg9/BDbiOYgr/wtmmuYk49q4qh5GTiB4lsGnf1tZzZO3XzNhBgPmBsNIqCUHRci7MfHpAlopl56+J+W2Cy9SvLDJRFCiknI8aJZrpX9XVRPXWbsgzrFpaD64NfBTi4XijzomUQE4ix887GX/K4dHxWQsmJ6HMiO6frtzxbf9OUyQM3X6zRsYaDwXI+dG0II9O4OHyUQv1LalmIHkZOQGMZJ9qGNmT7ls09WOWnCaEoXCvl5dAwIVjUN9us7GUvaaRQTlJfd5G/ENJ5mk8zTuxNSkBS88vC84xQ5Aax2NxparKtvd1mhXJCVOCkGy5O9OMkn2ScNNfX1DfVppP7DCMshWLKUpCPZLu5xQrjhKvyYlf6yqv8ZaCctCkn+bUV1Q35If4FjCCuYzGlPDRsZGW9CHmcVHixEzJOZsgJ9RNrnGTf2A/zL6QEdEUBViCF7CMb/a/XENQdFFkyqfDpsHEyBU5OGCdrYpI3N6LkAJDL5R7pbW6gDAaDBYgKsKKg3tqm7Lw97deBExejj4yAk/NwcaLeAiesR8vXA3fh2u6augIdB8+wcjAox2JlJIRhWZShNzCvME4sykkb+p3jcI0L1B5wMqacNA+ZLbkgptyMrQVDLqfEXdmdXz8VKtfASKzcsJxhPD50LA5VhXo4kCS8/g3Pp8PGyQlwMqXvudlHRu6gW9Ez+r8VflWIeZSUjQfbPnKFOUTMU2qCcTLnTBv8vmlbvn+r04m/2hP55CxcnJB20n/PzT64T8tUM9bs3a9/Iyy4a1zxwaDxIIPHXTyvsQskpdzAfvhu1T8emnhRdZzk02HjZJL0NdA8zV6Y2off/i65D/j3PIZJIZdofvyP3380l4WD5x3tNdXYODSLlyuLctjEi6KGi+NwzZQIJ/r+wb56Y36wvv9hn6KSh8goLBpN8p9/+OPHh0XOS5snne0BJWVpaZp175PSZ5xArRdPQsYJqax8pv3hT3/e/3F//90USDlp5HIJ7eN//eUPf+WOGgeorhArz5h9tCjgUVxb0/qMlOypiZdET8i3Qza7V2vQozFOZO37v/1Ig+Tdyfv90lk+b37841/++nuisTApFJ4JEwQqbUxpHMlNFinZKxOvyWZWIeNEb4lii3Fi+pTs77+v7u/3sHP7CHiwBrlcoQBR8rgUb5NStGWZakr2js4gMyWR58M1KuC4VEkUq7Qu6P/90/463o/PUAes4fIa7RripTa54EeK5qD5y75lnADl1bOvusJfjkwXDATd1/nw9yBMPLw7OZNUV7k+OPB97BOmbVNTYjFXNt9m/RaQ0yE1W2GLE9oY04Hsh59+2N/Grzujsw/EFYbDYdEZMEYKB88ETYFWn7KGVX1vz2UtYPjGJ14TSBueDz/9zyNOkJZuW7Ot4lzZrjmPE+mAZs/clC3IHhom2O6ErQX0zD01moyT94B3x+Pe+Pb2Fv4/Hk9ns4lsDRPKtbdwlkJPSgttfhRHM++yh3l69V4ydNae3Ulm2oCTH9/PzvTJ5PbTt98E+PbTGDc58vm8W/YCZFtZCgs/kbBNVpa2TOr9wMYmQ7Y1SjMeTBuq4Ie//7Dfm3z386dPn7777rtPP1Nevp1N8DSKHB8synFi+V0PsLJu4HLl2ID5XOrdipp5xSwbjnuTk5DZE2ZQasiJ+ae/vTubtDkdz9NLqRTX+xlIGbGbfGTFIXcW84EfGtTXBpECbWBZWTB2aKBYF1iKCdoT8Sx0nKTwbSMnZPTn3+jEbpoMNtFTt99+8wmKhmUQQ2tycWW9EG/WHYyPcgxYwZmb4sqyQS8eEB4uYDEWaUeS+v5/VfOCHjg57J++tUxZ537+BlfUkF3BkY042Le1KvOo5ECsHBRoi+zto+M0NnylGEoDyGCaTpXIZNS889vaLI4gTVX6NCKW7DhHjjB0G/H4MBGwsll5BpSUWJkOZ5f+tds4iQhb2fGmg8xCEGLV1/e96m9Mok6I1XAEgxs24sM4YLh8ctungINZhQ5nafLQa4ez7NBdqWBHV3v71F6e7AhCQ3PiLuUEoDxFyqCsDJfM3seUIdtBx644hGWHtml8hVlN+26Lk3t2v4uCYBjC3BIYJ8P5E6GCiqLNGSnKnAmKhBIbxs/2SOdJnmejMPNq+3wACxRLEFytISSMhhcpQ78mH6zmtAOgIj9kpCwZDzqkZSlszh6hT4PR+mNOqM3ggA9IHiE+X5FSDpzJwhNbsCZK48EpU9tGSzHtG0K2kcFARrxfMLU3jzgx8I5DoBQ1VyjO53JASsKjQgFbUvA8irKUNQtFRaEbo9JxOCUWkKlB1tO7KRv1bU5YoMjFIgcJNEzE7W1Scmhhr1nIxBRBk7mEgl85NmSrhFFivbNKN2wvsL+3RQq94VB6irIhCMX4UjCLHinxxJqFHTCVhUDhZFBa5toyEICtMMoJura0Lyj2xVbyHHqO1KKcCEJi6diCHylLygnbHUXfj0nT0DjZntPCo/bSIZUTPHMGHQ8rD7K1yQlqrIF6aUC8CBgoiYQh+z5lyIwK8yTlHE0eWoXtxNJmTbEYTjnxHArL+/z9Bie4EW7RGmJxNE6EBEiKEZCy8HSEknKNTXEZXyxzSA3qVDWM7gRBZ7JjVo03XFv2zoQG0HsV5aQ4TySKtuVLyrzAVNbrdcq+rce2mDYN3fA1xQxklPQ3AzeTp27BAove51AsGifDRCJhaa4fKHRTGepMzIdv672GexpOOQFINUgeFuXmWuXJnjaputLXyC7lpAicxDUtqMjo8geKUPZZ8W09x6VWFw0jqLm6pWq4YdscKCJuw+PEEfzkSTQ0zS8+WHsWsfjD3G//lh4n6gnvDTXDCdIWV5+eOAwouW8iFT4nDcYJJs8cBGO4CpRcuWybghcoZf9Q+XlwAiqc0KHyJNlW90ploRDLjuEUNzjBygMyq8nuKlAOUFntotcTM05wBMFXwhsm3pHQY6aybuDvVSI3Gj4nODAIkidhc76kDAsgsuhb7TglRfHGSXhAKWSHQDdBB6dVdlfpziai36QiUmTj5oCTOHICFk4bBmMDJZYwCWfTkZJi0VenSmn/gHZYkcKJGCucsrvysLTYsEUaHie0GoNx44gRtD2DWAykR3MYJ/S8YxsKcSt80+l10CrhHQBoskDJ4uIsAbKHZkPACRWUhMwRX1IOcJyEKvKwDEYn9LjCbWjNCQPdnWLNiRco9OCiIRRlh75gxcncSx5OK3oGf1Gm0aEJiqexhINWpxb2R8TgoU3/EFeTjtvo7qZcFLwXBJwwQaEDEtYNKsgJtfSGX3doKoZu7/wRoGPzTygSdc8/kCbjNgZDwAkVlPkR/sxggnLtcWInlBh6NjKBTKyGc5q0Dp0GClNF8yLrH76yBJf9Xg5yh3KSoFTJDm0EA06GipIAsjKdoLSHG2cQKP701Lz3P7vGCc6WZ/NElm1r0YKcu2Z6AhQpCgSQ2uZ5vhq2045PAc/PiDV2czUnmDo2Ghs9oFD0XFuRUiZbILLXwInJ/oQHLTipm96NMIEOpbT6vAA4fG9/0y16v2azAsHxRNbbJ4dmcLi4jpVN9qIlBIzeA2WqhvMhH9tQT0Q+6O61Qy9nOF9kPUExPEGZe782wMlex7wJgb1cakTHJAzv4GQT+ECHdJedZtUuHUaO3HDXhwVF2RcUZm9RUZRFbOhxkogfSXjEvhW2M7HPAbseXmRDSC6YBlkNPyKQk4bW8ATF114XOPEPEmhxVx3hs0PaIR4SbILe4kcFw/G+0srjaM66a0MMY4OyP1yzZBx4J0N3/PMFoMNPdjcfIMRZlv8NciJbfhvocaIVY4Ng4ChncApb24U67AMNqHdqaQ0+JxgokDFFOpRNzP2fuuWBr8ecfoKPM+vtiMAySFN83M9ks3szgm+KQkOW/eRxfZ0pl2Xv9YRgzemEe0bwCJkuxv4zxzfBt4HgGl7l8QVFWw791EG3JrakHcocBCFVlJRnBqkQI/R/tPL4gnI0t7yISeGnuvjRztQcH1QRkrPnwr+I4lJkKuubOT+J9DE+UWq6QzXHBxZknr99ZmUGEmAwRfGTx6NEHSGbnTDP6p9FCp9PVjl5oXZgPYbsmdvrP1QnmHWl3ehztkEyLVDKyuQFWZAtOlkKSjDnlZz0TjmTdRDc6hWrxota2QBS5qsH9xG1BQWrsnv66oOmAbjRlxYIddkfonBISQko4V9KuLBDv6kgKS+lDyirM094VZjoJXxGYm8HS84K+snnSQFWinFaj4lEKZmmdlRMPEg9bFxqk5eTQTPQrqg6aAl4mp2OEgR4N4iUSvvzCqFOajRKMrsdJQhKCs/3PtfQ6e1qGl433Umvtg39BqsPP32ZlFQPlYcf71gv/AyI3q5BBIjnLz3A/2wmIiUnO68lPvQJime69OwTpUkGn+WRrn6B6uwMSAqLbLo6enrNOkcLTusz1WnHQM7wE08gKk/NiUBKIEpwfrv7FWcDmWkFpyIddTt/1NQxSol4/Apq8DakG1TaZOtG2uh59Qn1rpXeq6jB21C5Ls2f2dqUlmRuq1RKnlGanQfJzNL0OfXBA85VqYv/VEDyfAf+RZl/FKk22vc0+DfkgIC44h8hb16flKyg6h2RhsooRVKTDv33JErcK80bHyQzrjJVSU2rNEhmu7aN8w9A56iGpKtewLwaN/8SQEYwQviVsESAUKGqIia7XBQkAUjmppWsve5y8xiqNH3t5eYJhP0UfYQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJ8Mf4P/ugPDlS8ZaYAAAAASUVORK5CYII="
          alt="logo"
        />
      </div>
      <div className="searchBar flex-[13]  ">
        <input
          type="text"
          value={props.searchValue}
          onChange={(event) => props.onSearch(event.target.value)}
          placeholder="Search products...."
          className="w-full text-[white] py-[0.7rem] px-[1rem] bg-[#272727] rounded-[0.5rem] placeholder:text-white"
        />
      </div>
      <div
        onClick={() => props.onIsCart(true)}
        className="cart flex-[1] flex justify-center cursor-pointer relative"
      >
        <AiOutlineShoppingCart color="white" size={40} />
        <div className="w-[20px] h-[20px] bg-[white] text-center rounded-[50%] absolute top-[-5px] right-8">
          <p className="text-[#336d21]">{props.cartDetails.length}</p>
        </div>
      </div>
      <div
        onClick={() => props.onDarkMode(!props.isDarkMode)}
        className="Toggle flex-[1] flex justify-end items-center cursor-pointer gap-[5px]"
      >
        {!props.isDarkMode ? (
          <BsToggleOn color="lightGreen" size={30} />
        ) : (
          <BsToggleOff color="white" size={30} />
        )}
        <h3 className="text-[white]">Dark mode</h3>
      </div>
    </nav>
  );
}
