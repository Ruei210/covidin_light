import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Box, Button, Divider, Typography } from "@mui/material";
import { ReactComponent as Edit } from "./../svg/edit.svg";

export const NervousPage = () => {
  const methods = useForm({ mode: "onBlur" });

  const { handleSubmit } = methods;

  // const onSubmit = async (data) => {
  //   await fetch(
  //     "https://1e01-2001-b011-4007-19c5-5092-66f9-5015-4a08.ngrok.io/api/createcase",
  //     {
  //       method: "POST",
  //       mode: "cors",
  //       body: JSON.stringify(data),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   alert(data);
  // };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ flex: 1, overflowY: "scroll", padding: "0px 0px 56px 0px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          lineHeight: 1,
          padding: "56px 0 12px 39px",
        }}
      >
        <div>
          <Typography
            sx={{
              margin: 0,
              color: "#5e574d",
              fontSize: { xs: "1.5rem", sm: "2.5rem" },
              fontWeight: "bold",
            }}
            component="h1"
          >
            後新冠特別門診管理系統
          </Typography>
        </div>
      </Box>
      <Divider sx={{ width: "calc(100% - 39px)" }} />
      <Box sx={{ display: "flex", alignItems: "center", my: "33px" }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            lineHeight: "2.5rem",
            ml: "39px",
            mr: "23px",
          }}
        >
          王大明
        </Typography>
        <Typography
          sx={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            alignSelf: "end",
          }}
        >
          焦慮自我評估量表
        </Typography>
        <Button
          startIcon={<Edit />}
          sx={{ fontSize: "1.5rem", color: "#6A594F", ml: "auto", mr: "61px" }}
        >
          修改
        </Button>
      </Box>
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold", ml: "49px", mb: "82px" }}
      >
        在過去兩個星期，你有多經常受以下問題困擾？
      </Typography>
      <FormProvider {...methods}>
        <form
          id="myform"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                textAlign: "center",
                background: "#C3834E",
                borderRadius: "10px",
                p: "3px",
              }}
            >
              <Box
                sx={{
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  "& td": {
                    border: "4px solid #C3834E",
                    background: "#f4f4ea",
                    fontSize: "1.25rem",
                  },
                }}
                component="table"
              >
                <Box component="tbody">
                  <Box
                    component="tr"
                    sx={{
                      "& td": {
                        color: "#fff",
                        background: "#DFAA86",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <Box
                      component="td"
                      sx={{
                        borderTopLeftRadius: "10px",
                        width: "380px",
                        height: "100px",
                      }}
                    >
                      項目
                    </Box>
                    <Box component="td" sx={{ width: "147px" }}>
                      完全沒有
                      <br />
                      (0分)
                    </Box>
                    <Box component="td" sx={{ width: "147px" }}>
                      幾天
                      <br />
                      (1分)
                    </Box>
                    <Box component="td" sx={{ width: "147px" }}>
                      一半以上的天數(2分)
                    </Box>
                    <Box
                      component="td"
                      sx={{ borderTopRightRadius: "10px", width: "147px" }}
                    >
                      近乎每天
                      <br />
                      (3分)
                    </Box>
                  </Box>

                  <ItemRow />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 7 }}>
            <Button
              sx={{
                color: "#fff",
                background: "#95B2B5",
                width: "100px",
                height: "35px",
                borderRadius: "15px",
                mr: 5,
                "&:hover": { background: "#95B2B5", opacity: 0.9 },
              }}
              type="submit"
            >
              儲存變更
            </Button>
            <Button
              sx={{
                color: "#fff",
                background: "#E2A086",
                width: "100px",
                height: "35px",
                borderRadius: "15px",
                "&:hover": { background: "#E2A086", opacity: 0.9 },
              }}
              type="reset"
            >
              清除重填
            </Button>
          </Box>
        </form>
      </FormProvider>
    </div>
  );
};

const item = [
  { title: "感到緊張、不安或煩躁", name: "item_one" },
  { title: "無法停止或控制憂慮", name: "item_two" },
  { title: "過份憂慮不同的事情", name: "item_three" },
  { title: "難以放鬆", name: "item_four" },
  { title: "心情不寧以致坐立不安", name: "item_five" },
  { title: "容易心煩或易怒", name: "item_six" },
  { title: "感到害怕、就像要發生可怕的事情", name: "item_seven" },
];

function ItemRow() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {item.map(({ title, name }) => (
        <Box
          component="tr"
          key={name}
          sx={{
            "& td": {
              p: 0,
            },
            "& input[type='radio']": {
              appearance: "none",
              display: "none",
              "& + label": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "65px",
              },
              "&:checked + label": {
                background: "#DFAA86",
              },
            },
          }}
        >
          <Box
            component="td"
            sx={{
              height: "72px",
              fontWeight: "bold",
              textAlign: "start",
              p: 2,
            }}
          >
            {title}
            {errors[name] && (
              <Typography color="error">{errors[name].message}</Typography>
            )}
          </Box>
          {[0, 1, 2, 3].map((value) => (
            <Box component="td" key={name + value}>
              <input
                {...register(name, {
                  required: "必填",
                })}
                type="radio"
                value="1"
                id={name + value}
              />
              <Box htmlFor={name + value} component="label"></Box>
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
}
