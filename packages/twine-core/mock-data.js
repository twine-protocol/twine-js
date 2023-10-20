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
