import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  th: {
    translation: {
      article: {
        article: "บทความ",
        createarticle: "สร้างบทความ",
        name: "ชื่อบทความ",
        nameplaceholder: " กรอก...ชื่อบทความ",
        tag: "แท็ก",
        tagplaceholder: "...แท็ก",
        addtag: "เพิ่มแท็ก ",
        add: " เพิ่ม",
        search: "ค้นหา ",
        searchtag: " ค้นหาแท็ก",
        noselecttag: "ยังไม่ได้เลือกแท็ก ",
        deletetag: "ลบแท็ก ",
        category: "หมวดหมู่",
        selectcategory: "เลือกหมวดหมู่",
        subcategory: "หมวดย่อย",
        selectsubcategory: "เลือกหมวดย่อย",
        status: "สถานะ",
        private: "ส่วนตัว",
        draft: "ร่าง ",
        public: "สาธารณะ",
        startdate: "วันที่เริ่มต้น",
        enddate: "วันที่สิ้นสุด",
        attachfile: "แนบไฟล์",
        noattachfile: "ไม่มีไฟล์แนบ",
        deletefile: "ลบไฟล์",
        save: "บันทึก",
        alert: {
          invalidTableDimensions: "กรุณากรอกจำนวนแถวและคอลัมน์ให้ถูกต้อง (ต้องมากกว่า 0).",
          editorNotInitialized: "ตัวแก้ไขยังไม่ได้เริ่มต้น.",
          errorTitle: "ข้อผิดพลาด",
          saveSuccess: "บันทึกบทความเรียบร้อยแล้ว!",
          saveError: "บันทึกบทความไม่สำเร็จ.",
          ok: "ตกลง",
          maxTags: "คุณสามารถเพิ่มแท็กได้สูงสุด {{count}} แท็กเท่านั้น.",
          tagTooLong: "แต่ละแท็กสามารถมีตัวอักษรได้สูงสุด {{count}} ตัว (ไม่นับช่องว่างหน้าหรือหลัง).",
          tagExists: "แท็ก \"{{tag}}\" มีอยู่แล้ว.",
          emptyTitle: "กรุณากรอกชื่อบทความ.",
          emptyContent: "เนื้อหาบทความต้องไม่ว่างเปล่า.",
          missingToken: "ไม่พบโทเค็นการเข้าถึง กรุณาเข้าสู่ระบบใหม่.",
          successTitle: "สำเร็จ",
          articleSaved: "บันทึกบทความเรียบร้อยแล้ว!",
          saveFailed: "เกิดข้อผิดพลาดขณะบันทึกบทความ",
          selectImageFileOnly: "กรุณาเลือกเฉพาะไฟล์รูปภาพเท่านั้น",
          importSuccess: "นำเข้าบทความเรียบร้อยแล้ว!",
          invalidJsonFile: "ไม่สามารถนำเข้าไฟล์ JSON: รูปแบบไม่ถูกต้องหรือเกิดข้อผิดพลาด.",
          pdfLibraryNotLoaded: "ยังไม่ได้โหลดไลบรารีสำหรับส่งออก PDF.",
          enterText: "กรุณากรอกข้อความที่จะแสดง.",
          enterUrl: "กรุณากรอก URL ที่อยู่.",
          hyperlinkInserted: "แทรกลิงก์เรียบร้อยแล้ว!",
          confirmSaveTitle: "คุณต้องการบันทึกบทความหรือไม่?",
confirmSaveText: "โปรดตรวจสอบเนื้อหาให้เรียบร้อยก่อนทำการบันทึก",
confirmButton: "ยืนยัน",
cancelButton: "ยกเลิก"
        }
      },
      navbar: {
        welcome: "Welcome - KB",
        home: "หน้าแรก",
        dashboard: "แดชบอร์ด",
        category: "หมวดหมู่",
        profile: "โปรไฟล์",
        settings: "การตั้งค่า",
        logout: "ออกจากระบบ"
      },
      profile: {
        "titleOptions": {
          "Mr": "นาย",
          "Mrs": "นาง",
          "Ms": "นางสาว",
          "Dr": "ดร."
        },
        "genderOption": {
          "male": "ชาย",
          "female": "หญิง",
          "other": "อื่นๆ"
        },
        personal:"ข้อมูลส่วนตัว",
        loading: "กำลังโหลดข้อมูลโปรไฟล์...",
        myProfile: "ข้อมูลโปรไฟล์ของฉัน",
        editmyProfile: "เเก้ไขโปรไฟล์ของฉัน",
        title: "คำนำหน้า",
        selectTitle: "เลือกคำนำหน้า",
        fullName: "ชื่อเต็ม",
        displayName: "ชื่อที่ใช้แสดง",
        firstName: "ชื่อ",
        lastName: "นามสกุล",
        phone: "เบอร์โทรศัพท์",
        dateOfBirth: "วันเกิด",
        gender: "เพศ",
        selectGender: "เลือกเพศ",
        male: "ชาย",
        female: "หญิง",
        other: "อื่นๆ",
        country: "ประเทศ",
        city: "เมือง",
        address: "ที่อยู่",
        edit: "แก้ไข",
        save: "บันทึก",
        saveSuccess:"บันทึกสำเร็จ"
      },
      actions: {
        createArticle: "สร้างบทความ",
        read: "อ่าน",
        edit: "แก้ไข",
        delete: "ลบ",
        backtoearth: "กลับสู่โลก"
      },
      settings: {
        title: "การตั้งค่า",
        subtitle: "จัดการการตั้งค่าบัญชีและการกำหนดค่าของคุณ",
        user: {
          table: {
            no: "#",
            username: "ผู้ใช้",
            email: "อีเมล",
            role: "บทบาท",
            status: "สถานะ",
            updated: "วันที่อัปเดต",
            action: "จัดการ"
          },
          modal: {
            basicinformation: "ข้อมูลพื้นฐาน",
            profileinformation: "ข้อมูลโปรไฟล์",
            title: "คำนำหน้า",
            gender: "เพศ",
            select_title: "เลือกคำนำหน้า",
            select_gender: "เลือกเพศ",
            mr: "นาย",
            ms: "นางสาว",
            mrs: "นาง",
            dr: "ดร.",
            male: "ชาย",
            female: "หญิง",
            other: "อื่นๆ",
            firstname: "ชื่อจริง",
            lastname: "นามสกุล",
            email: "อีเมล",
            username: "ชื่อผู้ใช้",
            role: "บทบาท",
            phone: "เบอร์โทร",
            dob: "วันเกิด",
            country: "ประเทศ",
            city: "เมือง",
            address: "ที่อยู่",
            department: "แผนก",
            status: "สถานะ",
            employee_id: "รหัสพนักงาน",
            profile_image: "รูปโปรไฟล์",
            created_date: "วันที่สร้าง",
            updated_date: "วันที่แก้ไข",
            cancel: "ยกเลิก",
            create: "สร้าง",
            update: "อัปเดต",
            close: "ปิด",
            view_details: "ดูรายละเอียด",
            edit: "แก้ไข",
            save: "บันทึก",
            reset: "รีเซ็ต",
            confirm_delete: "ยืนยันการลบ",
            yes: "ใช่",
            no: "ไม่ใช่",
            search: "ค้นหา",
            select_department: "เลือกแผนก",
            select_role: "เลือกบทบาท",
            not_available: "ไม่มีข้อมูล",
            loading: "กำลังโหลด...",
            success: "สำเร็จ",
            error: "เกิดข้อผิดพลาด"
          },
        
          title: "การตั้งค่าผู้ใช้",
          username: "ชื่อผู้ใช้",
          email: "อีเมล",
          firstName: "ชื่อจริง",
          lastName: "นามสกุล",
          edit: "แก้ไข",
          cancel: "ยกเลิก",
          manage: "จัดการผู้ใช้",
          save: "บันทึกการตั้งค่าผู้ใช้",
          create: "สร้างผู้ใช้งาน",
          search: "ค้นหาผู้ใช้"
        },
        
        role: {
          title: "การตั้งค่าบทบาท",
          current: "บทบาทปัจจุบัน",
          select: "เลือกบทบาท",
          admin: "ผู้ดูแลระบบ",
          user: "ผู้ใช้",
          moderator: "ผู้ดูแล",
          guest: "แขก",
          edit: "แก้ไข",
          cancel: "ยกเลิก",
          manage: "จัดการบทบาท",
          save: "บันทึกการตั้งค่าบทบาท",
          create: "สร้าง",
          modal: {
            title: "การตั้งค่าบทบาท",
            create_title: "สร้างบทบาท",
            edit_title: "แก้ไขบทบาท",
            role_name: "ชื่อบทบาท",
            role_name_placeholder: "กรอกชื่อบทบาท *",
            description: "คำอธิบาย",
            description_placeholder: "กรอกคำอธิบาย *",
            select_role: "เลือกบทบาท",
            loading: "กำลังโหลด...",
            create: "สร้าง",
            update: "อัปเดต",
            delete: "ลบ",
            creating: "กำลังสร้าง...",
            updating: "กำลังอัปเดต...",
            cancel: "ยกเลิก",
            permissions: "สิทธิ์การใช้งาน",
            permissions_loading: "(กำลังโหลด...)",
            save_permissions: "บันทึกสิทธิ์",
            saving: "กำลังบันทึก...",
            all: "ทั้งหมด",
            no_permissions: "ไม่มีสิทธิ์ใช้งานสำหรับ",
          },
          // Messages
          messages: {
            select_role_warning: "กรุณาเลือกบทบาทที่ต้องการแก้ไข",
            role_not_found: "ไม่พบบทบาทที่เลือก",
            role_name_required: "กรุณากรอกชื่อบทบาท",
            description_required: "กรุณากรอกคำอธิบาย",
            role_created: "สร้างบทบาทสำเร็จ!",
            role_updated: "อัปเดตบทบาทสำเร็จ!",
            role_deleted: "ลบบทบาทสำเร็จ!",
            permissions_updated: "อัปเดตสิทธิ์สำเร็จ!",
            create_failed: "ไม่สามารถสร้างบทบาทได้",
            update_failed: "ไม่สามารถอัปเดตบทบาทได้",
            delete_failed: "ไม่สามารถลบบทบาทได้",
            permissions_failed: "ไม่สามารถอัปเดตสิทธิ์ได้",
            load_roles_failed: "โหลดข้อมูลบทบาทไม่สำเร็จ",
            load_permissions_failed: "โหลดข้อมูลสิทธิ์ไม่สำเร็จ",
            select_role_to_save: "กรุณาเลือกบทบาทเพื่อบันทึกสิทธิ์",
            confirm_delete_title: "ลบบทบาท?",
            confirm_delete_button: "ลบ"
          },
          // Permission names
          permissions: {
            view: "ดู",
            add: "เพิ่ม",
            edit: "แก้ไข",
            delete: "ลบ",
            role: "บทบาท",
            user: "ผู้ใช้"
          },

          menus: {
            "home": "หน้าแรก",
            "dashboard": "แดชบอร์ด",
            "category": "หมวดหมู่",
            "profile": "โปรไฟล์",
            "setting": "การตั้งค่า"
          },
        },
        theme: {
          title: "การตั้งค่าธีม",
          light: "ธีมสว่าง",
          dark: "ธีมมืด",
          auto: "อัตโนมัติ (ระบบ)",
          apply: "ใช้ธีม",
          changed: "เปลี่ยนธีมเรียบร้อยแล้ว",
          lightMode: "โหมดสว่าง",
          darkMode: "โหมดมืด",
          switchedToLight: "เปลี่ยนเป็นโหมดสว่างแล้ว",
          switchedToDark: "เปลี่ยนเป็นโหมดมืดแล้ว"
        },
        language: {
          title: "ภาษา",
          select: "เลือกภาษา",
          successTitle: "สำเร็จ",
          successText: "เปลี่ยนภาษาเป็น {{language}} แล้ว",
          languageNames: {
            th: "ไทย (TH)",
            en: "English (EN)",
            zh: "中文 (ZH)",
            ja: "日本語 (JA)",
            ko: "한국어 (KO)"
          },
        },
        success: {
          title: "บันทึกสำเร็จ",
          message: "การตั้งค่าของคุณได้ถูกบันทึกเรียบร้อยแล้ว!"
        },
        error: {
          title: "เกิดข้อผิดพลาดในการบันทึก",
          message: "ไม่สามารถบันทึกการตั้งค่าได้ กรุณาลองอีกครั้ง"
        }
      },
      logout: {
        confirm_title: "ยืนยันการออกจากระบบ",
        confirm_text: "คุณแน่ใจหรือว่าต้องการออกจากระบบ?",
        yes_logout: "ใช่, ออกจากระบบ",
        cancel: "ยกเลิก",
        success_title: "ออกจากระบบเรียบร้อยแล้ว",
        warning_title: "แจ้งเตือนการออกจากระบบ",
        warning_text: "การออกจากระบบบนเซิร์ฟเวอร์ล้มเหลว แต่คุณถูกออกจากระบบในเครื่องแล้ว",
        error_title: "เกิดข้อผิดพลาด",
        error_text: "ไม่สามารถออกจากระบบได้ กรุณาลองใหม่ภายหลัง",
      },
    
      categoryModal: {
        deleteSuccessTitle: "ลบสำเร็จ",
        deleteSuccessText: "หมวดหมู่ถูกลบออกจากระบบเรียบร้อยแล้ว",
        deleteConfirmTitle: "ยืนยันการลบ",
        deleteConfirmText: "คุณแน่ใจว่าต้องการลบหมวดหมู่นี้หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้",
        confirmYes: "ใช่",
        confirmNo: "ไม่ใช่",
        createTitle: "สร้างหมวดหมู่",
        editTitle: "แก้ไขหมวดหมู่",
        nameLabel: "ชื่อหมวดหมู่",
        descriptionLabel: "คำอธิบาย (ไม่บังคับ)",
        nameLabelinput: "กรอกชื่อหมวดหมู่...", 
        descriptionLabelinput: "กรอกคำอธิบาย...",  
        searchPlaceholder: "ค้นหาไอคอน...",
        createBtn: "สร้าง",
        updateBtn: "อัปเดต",
        cancelBtn: "ยกเลิก",
        successTitle: "สำเร็จ!",
        successCreate: "สร้างหมวดหมู่เรียบร้อยแล้ว",
        successUpdate: "อัปเดตหมวดหมู่เรียบร้อยแล้ว",
        errorTitle: "ล้มเหลว!",
        errorCreate: "ไม่สามารถสร้างหมวดหมู่ได้",
        errorUpdate: "ไม่สามารถอัปเดตหมวดหมู่ได้",
        selectColorTitle: "เลือกสี",
        selectIconTitle: "เลือกไอคอน"

      }
    }
  },

  en: {
    translation: {
      article: {
        article: "Article",
        createarticle: "Create Article",
        name: "Article Name",
        nameplaceholder: " Enter...ArticleName",
        tag: "Tag",
        tagplaceholder: "...Tag",
        addtag: "Add Tag ",
        add: " Add",
        search: "Search ",
        searchtag: " Search Tag",
        noselecttag: "No Select Tag ",
        deletetag: "Delete Tag ",
        category: "Category",
        selectcategory: "Select Category",
        subcategory: "SubCategory",
        selectsubcategory: "Select SubCategory",
        status: "Status",
        private: "Private",
        draft: "Draft ",
        public: "Public",
        startdate: "Start Date",
        enddate: "End Date",
        attachfile: "Attach File",
        noattachfile: "No Attach File",
        deletefile: "Delete File",
        save: "Save",
        alert: {
          invalidTableDimensions: "Please enter valid numbers for rows and columns (must be greater than 0).",
          editorNotInitialized: "Editor is not initialized.",
          errorTitle: "Error",
          saveSuccess: "Article saved successfully!",
          saveError: "Failed to save article.",
          ok: "ok",
          maxTags: "You can add up to {{count}} tags only.",
          tagTooLong: "Each tag can have a maximum of {{count}} characters (excluding leading/trailing spaces).",
          tagExists: "The tag \"{{tag}}\" already exists.",
          emptyTitle: "Please enter the article title.",
          emptyContent: "Article content cannot be empty.",
          missingToken: "Access Token not found. Please log in again.",
          successTitle: "Success",
          articleSaved: "Article saved successfully!",
          saveFailed: "An error occurred while saving the article",
          selectImageFileOnly: "Please select image files only",
          importSuccess: "Article imported successfully!",
          invalidJsonFile: "Cannot import JSON file: Invalid format or an error occurred.",
          pdfLibraryNotLoaded: "PDF export library not loaded yet.",
          enterText: "Please enter the text to display.",
          enterUrl: "Please enter the URL path.",
          hyperlinkInserted: "Hyperlink inserted successfully!",
          confirmSaveTitle: "Do you want to save the article?",
confirmSaveText: "Please review the content before saving.",
confirmButton: "Confirm",
cancelButton:"Cancel"
        }
      },
      navbar: {
        welcome: "Welcome - KB",
        home: "Home",
        dashboard: "Dashboard",
        category: "Category",
        profile: "Profile",
        settings: "Settings",
        logout: "Logout"
      },
      profile: {
        "titleOptions": {
          "Mr": "Mr.",
          "Mrs": "Mrs.",
          "Ms": "Ms.",
          "Dr": "Dr."
        },
        "genderOption": {
          "male": "Male",
          "female": "Female",
          "other": "Other"
        },
        personal:"Personal Information",
        saveSuccess:"Save Success",
        editmyProfile: "Edit My Profile",
        loading: "Loading profile...",
        myProfile: "My Profile",
        title: "Title",
        selectTitle: "Select Title",
        fullName: "Full Name",
        displayName: "Display Name",
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone",
        dateOfBirth: "Date of Birth",
        gender: "Gender",
        selectGender: "Select Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        country: "Country",
        city: "City",
        address: "Address",
        edit: "Edit",
        save: "Save"
      },
      
      actions: {
        createArticle: "Create Article",
        read: "Read",
        edit: "Edit",
        delete: "Delete",
        backtoearth: "Back to Earth"
      },
      settings: {
        title: "Settings",
        subtitle: "Manage your account settings and preferences",
        user: {
          table: {
            no: "#",
            username: "Username",
            email: "Email",
            role: "Role",
            status: "Status",
            updated: "Updated Date",
            action: "Action"
          },
          modal: {
            basicinformation: "Basic Information",
            profileinformation: "Profile Information",
            title: "Title",
            gender: "Gender",
            select_title: "Select Title",
            select_gender: "Select Gender",
            mr: "Mr.",
            ms: "Ms.",
            mrs: "Mrs.",
            dr: "Dr.",
            male: "Male",
            female: "Female",
            other: "Other",
            firstname: "First Name",
            lastname: "Last Name",
            email: "Email",
            username: "Username",
            role: "Role",
            phone: "Phone",
            dob: "Date of Birth",
            country: "Country",
            city: "City",
            address: "Address",
            department: "Department",
            status: "Status",
            employee_id: "Employee ID",
            profile_image: "Profile Image",
            created_date: "Created Date",
            updated_date: "Updated Date",
            cancel: "Cancel",
            create: "Create",
            update: "Update",
            close: "Close",
            view_details: "View Details",
            edit: "Edit",
            save: "Save",
            reset: "Reset",
            confirm_delete: "Confirm Delete",
            yes: "Yes",
            no: "No",
            search: "Search",
            select_department: "Select Department",
            select_role: "Select Role",
            not_available: "Not Available",
            loading: "Loading...",
            success: "Success",
            error: "Error"
          },
          title: "User Settings",
          username: "Username",
          email: "Email",
          firstName: "First Name",
          lastName: "Last Name",
          edit: "Edit",
          cancel: "Cancel",
          manage: "Manage Users",
          save: "Save User Settings",
          create: "Create User",
          search: "Search Users"
        },
        role: {
          title: "Role Settings",
          current: "Current Role",
          select: "Select Role",
          admin: "Administrator",
          user: "User",
          moderator: "Moderator",
          guest: "Guest",
          edit: "Edit",
          cancel: "Cancel",
          manage: "Manage Roles",
          save: "Save Role Settings",
          create: "Create",
          modal: {
            title: "Role Settings",
            create_title: "Create Role",
            edit_title: "Edit Role",
            role_name: "Role Name",
            role_name_placeholder: "Role name *",
            description: "Description",
            description_placeholder: "Description *",
            select_role: "Select role",
            loading: "Loading...",
            create: "Create",
            update: "Update",
            delete: "Delete",
            creating: "Creating...",
            updating: "Updating...",
            cancel: "Cancel",
            permissions: "Permissions",
            permissions_loading: "(Loading...)",
            save_permissions: "Save Permissions",
            saving: "Saving...",
            all: "All",
            no_permissions: "No permissions available for",
          },
          // Messages
          messages: {
            select_role_warning: "Please select a role to edit",
            role_not_found: "Selected role not found",
            role_name_required: "Please enter role name",
            description_required: "Please enter role description",
            role_created: "Role created successfully!",
            role_updated: "Role updated successfully!",
            role_deleted: "Role deleted successfully!",
            permissions_updated: "Role permissions updated successfully!",
            create_failed: "Failed to create role",
            update_failed: "Failed to update role",
            delete_failed: "Failed to delete role",
            permissions_failed: "Failed to update role permissions",
            load_roles_failed: "Failed to load roles",
            load_permissions_failed: "Failed to load role permissions",
            select_role_to_save: "Please select a role to save permissions",
            confirm_delete_title: "Delete role?",
            confirm_delete_button: "Delete"
          },
          // Permission names
          permissions: {
            view: "View",
            add: "Add",
            edit: "Edit",
            delete: "Delete",
            role: "Role",
            user: "User"
          },
          menus: {
            "home": "Home",
            "dashboard": "Dashboard",
            "category": "Category",
            "profile": "Profile",
            "setting": "Setting"
          },
        },
        theme: {
          title: "Theme Settings",
          light: "Light Theme",
          dark: "Dark Theme",
          auto: "Auto (System)",
          apply: "Apply Theme",
          changed: "Theme changed successfully",
          lightMode: "Light Mode",
          darkMode: "Dark Mode",
          switchedToLight: "Switched to Light Mode",
          switchedToDark: "Switched to Dark Mode"
        },
        language: {
          title: "Language",
          select: "Select Language",
          successTitle: "Success",
          successText: "Language changed to {{language}}",
          languageNames: {
            th: "Thai (TH)",
            en: "English (EN)",
            zh: "Chinese (ZH)",
            ja: "Japanese (JA)",
            ko: "Korean (KO)"
          }
        },
        
        success: {
          title: "Settings Saved",
          message: "Your settings have been saved successfully!"
        },
        error: {
          title: "Save Error",
          message: "Failed to save settings. Please try again."
        }
      }
    }
  },

  zh: {
    
    translation: {
      article: {
        article: "文章",
        createarticle: "创建文章",
        name: "文章标题",
        nameplaceholder: " 输入...文章标题",
        tag: "标签",
        tagplaceholder: "...标签",
        addtag: "添加标签 ",
        add: " 添加",
        search: "搜索 ",
        searchtag: " 搜索标签",
        noselecttag: "未选择标签 ",
        deletetag: "删除标签 ",
        category: "分类",
        selectcategory: "选择分类",
        subcategory: "子分类",
        selectsubcategory: "选择子分类",
        status: "状态",
        private: "私人",
        draft: "草稿 ",
        public: "公开",
        startdate: "开始日期",
        enddate: "结束日期",
        attachfile: "附件",
        noattachfile: "无附件",
        deletefile: "删除文件",
        save: "保存",
        alert: {
          invalidTableDimensions: "请输入有效的行数和列数（必须大于0）。",
          editorNotInitialized: "编辑器未初始化。",
          errorTitle: "错误",
          saveSuccess: "文章保存成功！",
          saveError: "保存文章失败。",
          ok: "确定",
          maxTags: "您最多只能添加 {{count}} 个标签。",
          tagTooLong: "每个标签最多可包含 {{count}} 个字符（不包括前后空格）。",
          tagExists: "标签 \"{{tag}}\" 已存在。",
          emptyTitle: "请输入文章标题。",
          emptyContent: "文章内容不能为空。",
          missingToken: "未找到访问令牌。请重新登录。",
          successTitle: "成功",
          articleSaved: "文章保存成功！",
          saveFailed: "保存文章时发生错误",
          selectImageFileOnly: "请选择图像文件。",
          importSuccess: "文章导入成功！",
          invalidJsonFile: "无法导入JSON文件：格式无效或发生错误。",
          pdfLibraryNotLoaded: "PDF导出库尚未加载。",
          enterText: "请输入要显示的文本。",
          enterUrl: "请输入URL路径。",
          hyperlinkInserted: "超链接插入成功！",
          confirmSaveTitle: "您要保存文章吗？",
confirmSaveText: "请在保存前仔细检查内容。",
confirmButton: "确认",
cancelButton:"取消"
        }
      },
      navbar: {
        welcome: "欢迎 - KB",
        home: "首页",
        category: "类别",
        dashboard: "仪表盘",
        article: "文章",
        profile: "个人资料",
        settings: "设置",
        logout: "登出"
      },
      profile: {
        "titleOptions": {
          "Mr": "先生",
          "Mrs": "夫人",
          "Ms": "女士",
          "Dr": "博士"
        },
        "genderOption": {
          "male": "男",
          "female": "女",
          "other": "其他"
        },
      personal: "个人信息",
      loading: "正在加载个人资料...",
      myProfile: "我的个人资料",
      editmyProfile: "编辑我的个人资料",
      title: "称谓",
      selectTitle: "选择称谓",
      fullName: "全名",
      displayName: "显示名称",
      firstName: "名字",
      lastName: "姓氏",
      phone: "电话号码",
      dateOfBirth: "出生日期",
      gender: "性别",
      selectGender: "选择性别",
      male: "男",
      female: "女",
      other: "其他",
      country: "国家",
      city: "城市",
      address: "地址",
      edit: "编辑",
      save: "保存",
      saveSuccess: "保存成功"
    },
      settings: {
        title: "设置",
        subtitle: "管理您的账户设置和偏好",
        user: {
          table: {
            no: "#",
            username: "用户名",
            email: "电子邮件",
            role: "角色",
            status: "状态",
            updated: "更新日期",
            action: "管理"
          },
          modal: {
            basicinformation: "基本信息",
            profileinformation: "个人资料",
            title: "称谓",
            gender: "性别",
            select_title: "选择称谓",
            select_gender: "选择性别",
            mr: "先生",
            ms: "小姐",
            mrs: "女士",
            dr: "博士",
            male: "男",
            female: "女",
            other: "其他",
            firstname: "名字",
            lastname: "姓氏",
            email: "电子邮件",
            username: "用户名",
            role: "角色",
            phone: "电话",
            dob: "出生日期",
            country: "国家",
            city: "城市",
            address: "地址",
            department: "部门",
            status: "状态",
            employee_id: "员工编号",
            profile_image: "头像",
            created_date: "创建日期",
            updated_date: "更新日期",
            cancel: "取消",
            create: "创建",
            update: "更新",
            close: "关闭",
            view_details: "查看详情",
            edit: "编辑",
            save: "保存",
            reset: "重置",
            confirm_delete: "确认删除",
            yes: "是",
            no: "否",
            search: "搜索",
            select_department: "选择部门",
            select_role: "选择角色",
            not_available: "无数据",
            loading: "加载中...",
            success: "成功",
            error: "错误"
          },
        
          title: "用户设置",
          username: "用户名",
          email: "电子邮件",
          firstName: "名字",
          lastName: "姓氏",
          edit: "编辑",
          cancel: "取消",
          manage: "管理用户",
          save: "保存用户设置",
          create: "创建用户",
          search: "搜索用户"
        },
        role: {
          title: "角色设置",
          current: "当前角色",
          select: "选择角色",
          admin: "管理员",
          user: "用户",
          moderator: "版主",
          guest: "访客",
          edit: "编辑",
          cancel: "取消",
          manage: "角色管理",
          save: "保存角色设置"
        },
        
        theme: {
          title: "主题设置",
          light: "浅色主题",
          dark: "深色主题",
          auto: "自动（系统）",
          apply: "应用主题",
          changed: "主题更改成功",
          lightMode: "浅色模式",
          darkMode: "深色模式",
          switchedToLight: "已切换到浅色模式",
          switchedToDark: "已切换到深色模式"
        },
        language: {
          title: "语言",
          select: "选择语言",
          successTitle: "成功",
          successText: "已将语言更改为 {{language}}",
          languageNames: {
            th: "泰语 (TH)",
            en: "英语 (EN)",
            zh: "中文 (ZH)",
            ja: "日语 (JA)",
            ko: "韩语 (KO)"
          }
        },
        
        success: {
          title: "保存成功",
          message: "您的设置已成功保存！"
        },
        error: {
          title: "保存错误",
          message: "保存设置失败，请重试。"
        }
      }
    }
  },

  ja: {
    translation: {
      article: {
        article: "記事",
        createarticle: "記事を作成",
        name: "記事名",
        nameplaceholder: " 入力してください...記事名",
        tag: "タグ",
        tagplaceholder: "...タグ",
        addtag: "タグを追加 ",
        add: " 追加",
        search: "検索 ",
        searchtag: " タグを検索",
        noselecttag: "タグが選択されていません ",
        deletetag: "タグを削除 ",
        category: "カテゴリ",
        selectcategory: "カテゴリを選択",
        subcategory: "サブカテゴリ",
        selectsubcategory: "サブカテゴリを選択",
        status: "ステータス",
        private: "プライベート",
        draft: "ドラフト ",
        public: "公開",
        startdate: "開始日",
        enddate: "終了日",
        attachfile: "添付ファイル",
        noattachfile: "ファイルなし",
        deletefile: "ファイルを削除",
        save: "保存",
        alert: {
          invalidTableDimensions: "行数と列数に有効な数字を入力してください（0より大きい必要があります）。",
          editorNotInitialized: "エディタが初期化されていません。",
          errorTitle: "エラー",
          saveSuccess: "記事が正常に保存されました！",
          saveError: "記事の保存に失敗しました。",
          ok: "OK",
          maxTags: "{{count}} 個までタグを追加できます。",
          tagTooLong: "各タグは最大 {{count}} 文字（前後のスペースを除く）まで入力できます。",
          tagExists: "タグ「{{tag}}」はすでに存在します。",
          emptyTitle: "記事のタイトルを入力してください。",
          emptyContent: "記事の内容は空にできません。",
          missingToken: "アクセス・トークンが見つかりません。再度ログインしてください。",
          successTitle: "成功",
          articleSaved: "記事が正常に保存されました！",
          saveFailed: "記事の保存中にエラーが発生しました",
          selectImageFileOnly: "画像ファイルのみを選択してください",
          importSuccess: "記事が正常にインポートされました！",
          invalidJsonFile: "JSONファイルをインポートできません：無効な形式またはエラーが発生しました。",
          pdfLibraryNotLoaded: "PDFエクスポートライブラリがまだ読み込まれていません。",
          enterText: "表示するテキストを入力してください。",
          enterUrl: "URLパスを入力してください。",
          hyperlinkInserted: "ハイパーリンクが正常に挿入されました！",
          confirmSaveTitle: "記事を保存しますか？",
confirmSaveText: "保存する前に内容をご確認ください。",
confirmButton: "確認",
cancelButton:"キャンセル"
        }
      },
   
      navbar: {
        welcome: "ようこそ - KB",
        home: "ホーム",
        category: "カテゴリー",
        dashboard: "ダッシュボード",
        article: "記事",
        profile: "プロフィール",
        settings: "設定",
        logout: "ログアウト"
      },
    profile: {
      "titleOptions": {
        "Mr": "氏",
        "Mrs": "夫人",
        "Ms": "さん",
        "Dr": "博士"
      },
      "genderOption": {
        "male": "男性",
        "female": "女性",
        "other": "その他"
      },
      personal: "個人情報",
      loading: "プロフィールを読み込み中...",
      myProfile: "マイプロフィール",
      editmyProfile: "マイプロフィールを編集",
      title: "敬称",
      selectTitle: "敬称を選択",
      fullName: "氏名",
      displayName: "表示名",
      firstName: "名前",
      lastName: "姓",
      phone: "電話番号",
      dateOfBirth: "生年月日",
      gender: "性別",
      selectGender: "性別を選択",
      male: "男性",
      female: "女性",
      other: "その他",
      country: "国",
      city: "市",
      address: "住所",
      edit: "編集",
      save: "保存",
      saveSuccess: "保存成功"
    },
      settings: {
        title: "設定",
        subtitle: "アカウント設定と環境設定を管理",
        user: {
          title: "ユーザー設定",
          username: "ユーザー名",
          email: "メール",
          firstName: "名",
          lastName: "姓",
          edit: "編集",
          cancel: "キャンセル",
          manage:"管理用戶",

          save: "ユーザー設定を保存"
        },
        role: {
          title: "役割設定",
          current: "現在の役割",
          select: "役割を選択",
          admin: "管理者",
          user: "ユーザー",
          moderator: "モデレーター",
          guest: "ゲスト",
          edit: "編集",
          cancel: "キャンセル",
          manage:"管理角色",
          save: "役割設定を保存"
        },
        theme: {
          title: "テーマ設定",
          light: "ライトテーマ",
          dark: "ダークテーマ",
          auto: "自動（システム）",
          apply: "テーマを適用",
          changed: "テーマを変更しました",
          lightMode: "ライトモード",
          darkMode: "ダークモード",
          switchedToLight: "ライトモードに切り替えました",
          switchedToDark: "ダークモードに切り替えました"
        },
        language: {
          title: "言語",
          select: "言語を選択",
          successTitle: "成功",
          successText: "言語が{{language}}に変更されました",
          languageNames: {
            th: "タイ語 (TH)",
            en: "英語 (EN)",
            zh: "中国語 (ZH)",
            ja: "日本語 (JA)",
            ko: "韓国語 (KO)"
          }
        },
        success: {
          title: "保存成功",
          message: "設定が正常に保存されました！"
        },
        error: {
          title: "保存エラー",
          message: "設定の保存に失敗しました。再試行してください。"
        }
      }
    }
  },

  ko: {
    translation: {
      article: {
        article: "기사",
        createarticle: "기사 작성",
        name: "기사 제목",
        nameplaceholder: " 입력...기사 제목",
        tag: "태그",
        tagplaceholder: "...태그",
        addtag: "태그 추가 ",
        add: " 추가",
        search: "검색 ",
        searchtag: " 태그 검색",
        noselecttag: "태그가 선택되지 않음 ",
        deletetag: "태그 삭제 ",
        category: "카테고리",
        selectcategory: "카테고리 선택",
        subcategory: "하위 카테고리",
        selectsubcategory: "하위 카테고리 선택",
        status: "상태",
        private: "비공개",
        draft: "초안 ",
        public: "공개",
        startdate: "시작일",
        enddate: "종료일",
        attachfile: "첨부 파일",
        noattachfile: "첨부 파일 없음",
        deletefile: "파일 삭제",
        save: "저장",
        alert: {
          invalidTableDimensions: "행과 열에 유효한 숫자를 입력하세요 (0보다 커야 합니다).",
          editorNotInitialized: "에디터가 초기화되지 않았습니다.",
          errorTitle: "오류",
          saveSuccess: "기사가 성공적으로 저장되었습니다!",
          saveError: "기사 저장에 실패했습니다.",
          ok: "확인",
          maxTags: "{{count}}개 태그만 추가할 수 있습니다.",
          tagTooLong: "각 태그는 최대 {{count}}자(앞뒤 공백 제외)까지 가능합니다.",
          tagExists: "\"{{tag}}\" 태그가 이미 존재합니다.",
          emptyTitle: "기사 제목을 입력하세요.",
          emptyContent: "기사 내용은 비워둘 수 없습니다.",
          missingToken: "액세스 토큰을 찾을 수 없습니다. 다시 로그인하세요.",
          successTitle: "성공",
          articleSaved: "기사가 성공적으로 저장되었습니다!",
          saveFailed: "기사 저장 중 오류가 발생했습니다",
          selectImageFileOnly: "이미지 파일만 선택하세요",
          importSuccess: "기사가 성공적으로 가져와졌습니다!",
          invalidJsonFile: "JSON 파일을 가져올 수 없습니다: 형식이 잘못되었거나 오류가 발생했습니다.",
          pdfLibraryNotLoaded: "PDF 내보내기 라이브러리가 아직 로드되지 않았습니다.",
          enterText: "표시할 텍스트를 입력하세요.",
          enterUrl: "URL 경로를 입력하세요.",
          hyperlinkInserted: "하이퍼링크가 성공적으로 삽입되었습니다!",
          confirmSaveTitle: "기사를 저장하시겠습니까?",
confirmSaveText: "저장하기 전에 내용을 확인해주세요.",
confirmButton: "확인",
cancelButton:"취소"

        }
      },
      navbar: {
        welcome: "환영합니다 - KB",
        home: "홈",
        category:"카테고리",
        dashboard: "대시보드",
        article: "기사",
        profile: "프로필",
        settings: "설정",
        logout: "로그아웃"
      },
    profile: {
      "titleOptions": {
        "Mr": "Mr.",
        "Mrs": "Mrs.",
        "Ms": "Ms.",
        "Dr": "박사"
      },
      "genderOption": {
        "male": "남성",
        "female": "여성",
        "other": "기타"
      },
      personal: "개인 정보",
      loading: "프로필 로딩 중...",
      myProfile: "내 프로필",
      editmyProfile: "내 프로필 편집",
      title: "칭호",
      selectTitle: "칭호 선택",
      fullName: "전체 이름",
      displayName: "표시 이름",
      firstName: "이름",
      lastName: "성",
      phone: "전화번호",
      dateOfBirth: "생년월일",
      gender: "성별",
      selectGender: "성별 선택",
      male: "남성",
      female: "여성",
      other: "기타",
      country: "국가",
      city: "도시",
      address: "주소",
      edit: "편집",
      save: "저장",
      saveSuccess: "저장 성공"
    },
      settings: {
        title: "설정",
        subtitle: "계정 설정 및 환경 설정 관리",
        user: {
          title: "사용자 설정",
          username: "사용자명",
          email: "이메일",
          firstName: "이름",
          lastName: "성",
          edit: "편집",
          cancel: "취소",
          save: "사용자 설정 저장"
        },
        role: {
          title: "역할 설정",
          current: "현재 역할",
          select: "역할 선택",
          admin: "관리자",
          user: "사용자",
          moderator: "모더레이터",
          guest: "게스트",
          edit: "편집",
          cancel: "취소",
          save: "역할 설정 저장"
        },
        theme: {
          title: "테마 설정",
          light: "라이트 테마",
          dark: "다크 테마",
          auto: "자동 (시스템)",
          apply: "테마 적용",
          changed: "테마가 변경되었습니다",
          lightMode: "라이트 모드",
          darkMode: "다크 모드",
          switchedToLight: "라이트 모드로 전환했습니다",
          switchedToDark: "다크 모드로 전환했습니다"
        },
        language: {
          title: "언어",
          select: "언어 선택",
          successTitle: "성공",
          successText: "언어가 {{language}}(으)로 변경되었습니다",
          languageNames: {
            th: "태국어 (TH)",
            en: "영어 (EN)",
            zh: "중국어 (ZH)",
            ja: "일본어 (JA)",
            ko: "한국어 (KO)"
          }
        },
        
        success: {
          title: "저장 성공",
          message: "설정이 성공적으로 저장되었습니다!"
        },
        error: {
          title: "저장 오류",
          message: "설정 저장에 실패했습니다. 다시 시도해주세요."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'th', // default language
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false // react already escapes values
    }
  });

export default i18n;
