﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Bekap4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Склады.
    /// </summary>
    // *** Start programmer edit section *** (Склады CustomAttributes)

    // *** End programmer edit section *** (Склады CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СкладыE", new string[] {
            "Склад as \'Склад\'"})]
    public class Склады : ICSSoft.STORMNET.DataObject
    {
        
        private string fСклад;
        
        private IIS.Bekap4.ЗаказПост fЗаказПост;
        
        // *** Start programmer edit section *** (Склады CustomMembers)

        // *** End programmer edit section *** (Склады CustomMembers)

        
        /// <summary>
        /// Склад.
        /// </summary>
        // *** Start programmer edit section *** (Склады.Склад CustomAttributes)

        // *** End programmer edit section *** (Склады.Склад CustomAttributes)
        [StrLen(255)]
        public virtual string Склад
        {
            get
            {
                // *** Start programmer edit section *** (Склады.Склад Get start)

                // *** End programmer edit section *** (Склады.Склад Get start)
                string result = this.fСклад;
                // *** Start programmer edit section *** (Склады.Склад Get end)

                // *** End programmer edit section *** (Склады.Склад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Склады.Склад Set start)

                // *** End programmer edit section *** (Склады.Склад Set start)
                this.fСклад = value;
                // *** Start programmer edit section *** (Склады.Склад Set end)

                // *** End programmer edit section *** (Склады.Склад Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Bekap4.ЗаказПост.
        /// </summary>
        // *** Start programmer edit section *** (Склады.ЗаказПост CustomAttributes)

        // *** End programmer edit section *** (Склады.ЗаказПост CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ЗаказПост"})]
        public virtual IIS.Bekap4.ЗаказПост ЗаказПост
        {
            get
            {
                // *** Start programmer edit section *** (Склады.ЗаказПост Get start)

                // *** End programmer edit section *** (Склады.ЗаказПост Get start)
                IIS.Bekap4.ЗаказПост result = this.fЗаказПост;
                // *** Start programmer edit section *** (Склады.ЗаказПост Get end)

                // *** End programmer edit section *** (Склады.ЗаказПост Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Склады.ЗаказПост Set start)

                // *** End programmer edit section *** (Склады.ЗаказПост Set start)
                this.fЗаказПост = value;
                // *** Start programmer edit section *** (Склады.ЗаказПост Set end)

                // *** End programmer edit section *** (Склады.ЗаказПост Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СкладыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СкладыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СкладыE", typeof(IIS.Bekap4.Склады));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Склады.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСклады CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСклады CustomAttributes)
    public class DetailArrayOfСклады : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Bekap4.DetailArrayOfСклады members)

        // *** End programmer edit section *** (IIS.Bekap4.DetailArrayOfСклады members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Склады by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Склады.
        /// </summary>
        public DetailArrayOfСклады(IIS.Bekap4.ЗаказПост fЗаказПост) : 
                base(typeof(Склады), ((ICSSoft.STORMNET.DataObject)(fЗаказПост)))
        {
        }
        
        public IIS.Bekap4.Склады this[int index]
        {
            get
            {
                return ((IIS.Bekap4.Склады)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Bekap4.Склады dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
