/* eslint-disable max-len */
import { fromJSON } from './src/conversion'

export const chainJSON = `
{
  "cid": {
    "/": "bafyriqfohdbs5gb7ormmkftnd4keg6pag5uvn3omzr363ii4lksy4cyerhbwh4hiii34mvtnwj3hirz6ajdv6ql4vc6blief4cjgn57rcyuss"
  },
  "data": {
    "content": {
      "key": {
        "alg": "RS256",
        "e": "AQAB",
        "kty": "RSA",
        "n": "0Dj_EWmkEF_npVxu3YJFBN7fmpobMW-jfSYim7AmMA_0fWWGgbBY8AhIv1_S6cLjM8hlaw5_zFJcZKCMtgmSC49SmHXurOcplnWEfZZu2L7YRL7Uz8wlLjHqgLa_71SYTrFXWZUjqZ6kHCqsoxjYV7YdlZLXOTsUqdaY_P90hvNnI_xy2tscXJmqAkImNIsfA7ovOHQrhwZ0yfpYafOCPqtiPrmoNNK9NehOhLEcNR45ihWfQRGrOb4OKcmVcZjIT5RyqTHu7uepZJDKwTUbzOVRVDmKW_fwV8d_YaLusjuTc_EE1Y2Z73lQAPOVhAZS1b5ilORH0x-x3j7CWIDlhw"
      },
      "links_radix": 32,
      "meta": {
        "description": "Random oracle following the NIST spec"
      },
      "mixins": [],
      "source": "random.colorado.edu",
      "specification": "twine/1.0.x"
    },
    "signature": "eyJhbGciOiJSUzI1NiJ9.FEDCglbw1zcoP8T_bPZ270geJt2Le3oZ3XRNvu65UBzX8JSzHenXPQmLI_-KAzve2n5bAPF3ipo6v56hE-kNG4fO.SUMiHYa3D6WhHuTzeStQpsjb8g4vV6mGoiscdT8J24j8djjo_ht3ANr1TdwQcQsoAIRNhV0TpB2A7eVuUXfOsbKPT6QrCGG5k3l9nLsUEhMeikfiWSIXecLRyT77wa7kny9yafixMbPa-jnJl695R5hkMw98oeJHyd9JEup2hpsvbWWMj7nyVLNRLtBQOv9yiuQf7fYWn4RVai9D1tq5nlIBcdOgFSc8pthBm6g8TKvNKwqyPGiyhFsHixXaOFq7c79GlCmDV0qmSHHxNnmKkWtTkYWFmAcX9TqN06zL_Jq2TWreKMuQXGI0icGNx7pdJ7WHwruhKE94yw6PCijZYA"
  }
}
`

export const pulseJSON = `
{
  "cid": {
    "/": "bafyriqftyk4dorluiexncrx7qw2cth7j2ghh5socecucdvbvevcwzorrqdh6ztjqsl5a6faxfftdzugswoxqp32gmkvrw64a66yahm2favjpi"
  },
  "data": {
    "content": {
      "chain": {
        "/": "bafyriqfohdbs5gb7ormmkftnd4keg6pag5uvn3omzr363ii4lksy4cyerhbwh4hiii34mvtnwj3hirz6ajdv6ql4vc6blief4cjgn57rcyuss"
      },
      "index": 0,
      "links": [],
      "mixins": [],
      "payload": {
        "pre": {
          "/": {
            "bytes": "FECbIGQh/nhYW7Gz1G9aQJBN/keEhRzZx+ows+1esUwRvHqKoblXwB7bk5D61gbyKvykgfyBB0jhEgnIjHV5eBMg"
          }
        },
        "salt": {
          "/": {
            "bytes": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          }
        }
      },
      "source": "random.colorado.edu"
    },
    "signature": "eyJhbGciOiJSUzI1NiJ9.FECwPC7mKsVq7kMsriOYz3XxNQurVNvNYYvuH3FkoEvkDOSMKY371o383244YOgUXht-t-tD002Cz5ppDMBxbTVk.wu0_I8cjD2oRW0a7lR7ZZ0Ljv05c1T_NEiV0IW_23mwuTvzz637Vq0JoGib-CTjABNETZwVQfsSevvle-kcl8QgZjl3DD41IV2-UuwGzQS6hohhduk8D4lHCBnyc5LCwyQxqHtleXlger5njx51pDHxLkiNU5fitPSg0ZsUqTdca0UgABylMEOt_Odl1587BcS8p7yeawVPzamdAJZs_wiRoqV0OvF8KIuK8HjBtQ_yc-C-pCh_za2ckHVOmwudVn2j2fmegHveOX3ua6SdUVYdGKffuGkwP3bztyz6_5MXcil0FiZLST8ht-wa4puoJipIMuODro5LGfilCMLj00g"
  }
}
`

export const chain = await fromJSON(chainJSON)
export const pulse = await fromJSON(pulseJSON)

export const orphanPulseJSON = `
{
  "cid": {
    "/": "bafyriqgogvy7yesfz46mjyssf3bsj5r2yfuda4dop5auk475ezdla5h4ayvwy27sxmrowo5zirpar4xt4henngxr2sz2434rcg2wrhusgcfu6"
  },
  "data": {
    "content": {
      "chain": {
        "/": "bafyriqbof7pc5jefdhjwb7frq33xc3onhjdapncgxvpqubrwotfwhmpoowwc7jhj3pro33cuaain5vszuzjh6eh423lkwkod44vs54q3u4cca"
      },
      "index": 0,
      "links": [],
      "mixins": [],
      "payload": {
          "timestamp": "2022-04-07T23:41:15.741Z"
      },
      "source": "random.colorado.edu"
    },
    "signature": "eyJhbGciOiJSUzI1NiJ9.FECvBMliRTd9Co-Wu1oRdcoekkxmV3w9S0roimzVCGwkOkpAFGraBKWgn9RE44qX7xn7mBMRdZmSB_4WtZuruUpo.JLg1lpnqZ7LJkIdkZw4SuOdbdAzsIz_qSMfgv4mhNGKy7g8YTM5Ga1_JB0-aLLwFAO70zY0E4Cw1kY7F0Tl1EQg1m3nmkeWyuhPObLAlz4B5DMel9_5GA5Gj_PIW2lIRmEI7Bcacnj-e7uP4FZMwdSrsxpbJNzq3D6LWl1d26BV4zTgSuQUAtJtOxFxJhlRvrRFXnhy50OWTvVfTs-431Grch4oTfLsIbMWm__rcG4w6Oac7HYh2nGnRboEwySAet84zzRj_Ndb3Uy6Jg5Hi93O4k9FZaBc7N0ss_n3IKQIbc6dn1ve90QG1EAd7hZ6LETQeQBaJZJcgIijKHaccqQ"
  }
}
`

export const orphanPulse = await fromJSON(orphanPulseJSON)

export const chain2JSON = `
{
  "cid": {
    "/": "bafyriqbrgesfmukuylx4vqhykv2yraetmcsavbybcxmral2embohyisif6uojw55uu74kd35ja3ib6wvsxmpegrkqdlrp7u3mq4kstili5lby"
  },
  "data": {
    "content": {
      "key": {
        "alg": "ES256",
        "crv": "P-256",
        "kty": "EC",
        "x": "SSD9esrjgC6GsZmPq6rz4NI5ZM4pU3sBbb2EeKDXuxk",
        "y": "oU9JfBXtkdc5uGEhYiP_OKXKWqCwZtxsgT_M5IJHSF4"
      },
      "links_radix": 32,
      "meta": {
        "description": "Seam chain providing logical separation between CURBy and other chains"
      },
      "mixins": [

      ],
      "source": "entwine.me",
      "specification": "twine/1.0.x"
    },
    "signature": "eyJhbGciOiJFUzI1NiJ9.FEBgwqhCQhjSZ2A7D8NpHPABQXeBBA3XlqfDwgblr21wjGkOIVv7c8wtGFIiSfSoksu_jCWt1VJ--FU5qOmkuinv.MBQML-xVU0HszUKyRxRANByeFv4-vIAa_zy3VnFJOQP2FmokWhy89DTcfYQ4rBX5fplE5_AoisqHTd4SWCq29g"
  }
}
`

export const chain2 = await fromJSON(chain2JSON)

export const chain2pulse2JSON = `
{
  "cid": {
    "/": "bafyriqayatyppzygxqw5scrpfewivenqskgpntpox54bypra4u2oajowcshopee43ls353sn4bmkowjxx5sohatpbelhzasy2crwvvwgabmtg"
  },
  "data": {
    "content": {
      "chain": {
        "/": "bafyriqbrgesfmukuylx4vqhykv2yraetmcsavbybcxmral2embohyisif6uojw55uu74kd35ja3ib6wvsxmpegrkqdlrp7u3mq4kstili5lby"
      },
      "index": 9195,
      "links": [
        {
          "/": "bafyriqbuwkor64afzbmzcjtapao2gdzqblxy76i6pqxifkmh37uebwsgqadzmicdj5kj5mhp7cqkkj2eyxgxeitom55qyb4sljuswl65unfrw"
        },
        {
          "/": "bafyriqcuvkzhwkdewrgeiivhtsljtancuvy67c5pjj6dbabrtpx372hqomle3scl657bxtvxeyf7vmqxvg5ksn4p4aapln5o4lqrqvgm6fprw"
        },
        {
          "/": "bafyriqbjc2ul7yqujl4finw35mamxjzhuwf7vrbl7gurfoehllezuph6fgxf3g4zmfhborg7i7bnl2k47qhxl6drujprbnjrjxjpxgysx4yqy"
        }
      ],
      "mixins": [
        {
          "chain": {
            "/": "bafyriqbrbg6tsyywg7m2iwbwt3cdfntnxtqxoepfrj2civftudstdc7yhivro2gi5jumlhlm5dvcem6bmksxg35xthv3es6lr4uadisw522be"
          },
          "value": {
            "/": "bafyriqeeryt56hsjokj3cq2tsd3f4tddrjtpochhfeiunjo7imqii427tqbdepyi6vzvyfhxqeugxrc2gcn3ouejaeh3kk6tsktpxlg7g22w6"
          }
        },
        {
          "chain": {
            "/": "bafyriqhtvaktoac4b36m2s5ggjrgwjzarv3rrcxt5n5w2nu2l2teuedvptwoqu2ljlssx4oxcm3nb255eq6o6r7333w5xqejkg7afti2ibhu6"
          },
          "value": {
            "/": "bafyriqgfjfubs34255nfzyumppvgqiw6zh4xoq7elqp53cbb6fwti7h36si3mihi6x5c27ukgt55vpslxuj4cf7ittclt34tcegtczl66qrka"
          }
        }
      ],
      "payload": {
        "timestamp": "2023-10-07T05:06:53.446Z"
      },
      "source": "entwine.me"
    },
    "signature": "eyJhbGciOiJFUzI1NiJ9.FEBFEVe_osIKBWWoCdYufnPFWkulstGdrUCNgWe4EnYFwwL-rGtnt_N04hK432LvmilfeycEWGs_y88szGUDNEf-.SFqzdkzHy0vX8XhN_ny2uLXiH2qdgfP0Rn052dbuim8zQ70aN10IXI55sAUxR5bimmC1qMdTF8VTT2rKzmudUg"
  }
}
`

export const chain2pulse2 = await fromJSON(chain2pulse2JSON)

export const chain2pulse3JSON = `
{
  "cid": {
    "/": "bafyriqhhiyjuq4tohlpug4a3drplrx7lb7ows7fyrqxg2pljretwfef5imf7ggnijkurfxod4vsdur7onromgm4glnpqeiswjtnon2xspuajy"
  },
  "data": {
    "content": {
      "chain": {
        "/": "bafyriqbrgesfmukuylx4vqhykv2yraetmcsavbybcxmral2embohyisif6uojw55uu74kd35ja3ib6wvsxmpegrkqdlrp7u3mq4kstili5lby"
      },
      "index": 9206,
      "links": [
        {
          "/": "bafyriqehlhy2q5ikzbigxet6wwfmczt7tmnzcjwbqbudoz5thtdzyzim723nhjdsgnkgxbpoanooo6x64p5ezz6htch75wgzndrjj5rfur3to"
        },
        {
          "/": "bafyriqcuvkzhwkdewrgeiivhtsljtancuvy67c5pjj6dbabrtpx372hqomle3scl657bxtvxeyf7vmqxvg5ksn4p4aapln5o4lqrqvgm6fprw"
        },
        {
          "/": "bafyriqbjc2ul7yqujl4finw35mamxjzhuwf7vrbl7gurfoehllezuph6fgxf3g4zmfhborg7i7bnl2k47qhxl6drujprbnjrjxjpxgysx4yqy"
        }
      ],
      "mixins": [
        {
          "chain": {
            "/": "bafyriqbrbg6tsyywg7m2iwbwt3cdfntnxtqxoepfrj2civftudstdc7yhivro2gi5jumlhlm5dvcem6bmksxg35xthv3es6lr4uadisw522be"
          },
          "value": {
            "/": "bafyriqdbpszhmwzqujeymkxmlmf6emjkljmfp5vvdcrg2n47fjc4hpo5txsetjcehr2zvt5ecqxegubs4ncdsyu4dsiw6uqe3zz3bdrc2qcgm"
          }
        },
        {
          "chain": {
            "/": "bafyriqhtvaktoac4b36m2s5ggjrgwjzarv3rrcxt5n5w2nu2l2teuedvptwoqu2ljlssx4oxcm3nb255eq6o6r7333w5xqejkg7afti2ibhu6"
          },
          "value": {
            "/": "bafyriqbmms3n2fc3iaszzmam6l2s6pnrlx5qgttn2ke3naf4y735lfocggr23miziuydt47kgftuxpdgglnok2gs66digdst472seu4hbhux4"
          }
        }
      ],
      "payload": {
        "timestamp": "2023-10-07T05:17:53.683Z"
      },
      "source": "entwine.me"
    },
    "signature": "eyJhbGciOiJFUzI1NiJ9.FEA4FsVUNXF8IaxaV-PNN6TF_vbAlZu5pQfHpba8cG79sGw6IhdVC3nb3GkN6IkSwJYknjWv1s8D3AJwgPFvdqk3.4MClFRjMHtQFZFOYt4ihImjemsRqqeKSKD0jovSvlr1zsmOCBSzHiZg6GkOBiTjVK2SZBgB6MGhd3QIwSo-t7g"
  }
}
`

export const chain2pulse3 = await fromJSON(chain2pulse3JSON)