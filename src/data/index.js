import computer_org from "./computer_org";
import cloud_computing from "./cloud_computing";
import software_engg from "./software_engg";
import pyq_tre_416I from "./pyq_tre_416I";
import pyq_tre_526E from "./pyq_tre_526E";
export const subjectCollection=[
    {
      subject_code:"computer_org",
      subject:"Computer Organisation",
      subsections:["section_1", ]
    },
    {
      subject_code:"cloud_computing",
      subject:"Cloud Computing",
      subsections:["sbi_so_basic_cloud_comp", "sbi_so_basic_cloud_comp_section_ii", "sbi_so_cloud_comp_pyq"]
    },
    {
        subject_code:"software_engg",
        subject:"Software Engineering",
        subsections:["pyq_section_i", "pyq_section_ii"]
      },
      {
        subject_code:"pyq_tre_416I",
        subject:"BPSC TRE COMP SCI 416I",
        subsections:["general_studies_section", "computer_section"]
      },

      {
        subject_code:"pyq_tre_526E",
        subject:"BPSC TRE COMP SCI 526E",
        subsections:["general_studies_section", "computer_section"]
      },
    //   {
    //     subject_code:"computer_org",
    //     subject:"Computer Organisation",
    //     subsections:["section_1", ]
    //   },
    //   {
    //     subject_code:"cloud_computing",
    //     subject:"Cloud Computing",
    //     subsections:["sbi_so_basic_cloud_comp", "sbi_so_basic_cloud_comp_section_ii"]
    //   },
    //   {
    //     subject_code:"cloud_computing",
    //     subject:"Cloud Computing",
    //     subsections:["sbi_so_basic_cloud_comp", "sbi_so_basic_cloud_comp_section_ii"]
    //   }
  ]

export default {
    computer_org: computer_org,
    cloud_computing: cloud_computing,
    software_engg: software_engg,
    pyq_tre_416I: pyq_tre_416I,
    pyq_tre_526E:pyq_tre_526E
  }